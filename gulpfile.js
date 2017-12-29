var gulp = require('gulp'),
    //rename = require('gulp-rename'),
    //notify = require('gulp-notify'),
    //autoprefixer = require('gulp-autoprefixer'),
    //livereload = require('gulp-livereload'),
    //connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    htmlmin = require('gulp-htmlmin'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync');
    //fileInclude = require('gulp-file-include'),
    //minify = require('gulp-minify')

var adminPath = './dist/';
var assets = './src/assets';
// gulp.task('connect', function() {
//     connect.server({
//         root: 'dist/',
//         livereload: true,
//         port: 8888
//     });
// });
/**SCSS  - Estilos*/
gulp.task('estilos', function () {
    gulp.src([assets + '/scss'+'/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/assets/css'));
});

/**Fonts*/
gulp.task('fonts', function () {
    gulp.src([assets + '/fonts'+'/*.*'])
        .pipe(gulp.dest('./dist/assets/fonts'));
});

/**Images*/
gulp.task('images', function () {
    gulp.src([assets + '/images'+'/**/*.*'])
        .pipe(gulp.dest('./dist/assets/images'));
});

/**JS de configuración*/
gulp.task('js', function () {
    gulp.src([assets + '/js'+'/*.js'])
        .pipe(gulp.dest('./dist/assets/js'));
});

/**JS por página*/
gulp.task('jspages', function () {
    gulp.src([assets + '/pages'+'/*.js'])
        .pipe(gulp.dest('./dist/assets/pages'));
});


/**Plugins Externos -(No se ejecuta watch)*/
gulp.task('libs', function () {
    gulp.src([assets + '/libs'+'/**/*.js'])
        .pipe(gulp.dest('./dist/libs'));
});

/**Templates HTML */
gulp.task('templates', function () {
    gulp.src('./src/templates/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});


gulp.task('watch', function () {
    gulp.watch(assets + '/scss'+'/*.scss', ['estilos']);
    //gulp.watch(assets + '/fonts'+'/*.*', ['fonts']);
    //gulp.watch(assets + '/images'+'/**/*.*', ['images']);
    gulp.watch(assets + '/js'+'/*.js', ['js']);
    gulp.watch(assets + '/pages'+'/*.js', ['jspages']);
    gulp.watch('./src/templates/*.html', ['templates']);

    // gulp.watch('./src/admin/assets/scripts/**/*.js', ['scripts:source', 'scripts:js:minify']);
    // gulp.watch('./src/admin/assets/scripts/**/*.scss', ['scripts:css:source', 'scripts:css:minify']);
    gulp.watch("./dist/*.*").on("change", browserSync.reload);
	gulp.watch("./dist/**/*.*").on("change", browserSync.reload);
});




/**Browser */
gulp.task("ServerBrowserSync", function(){
    browserSync.init({
        port:8089,
        //browser: "chrome",
        browser: "Firefox",
        server:{
            baseDir:"./dist/",
            index: "index.html"
        }
    });
});


/**Ejecutables*/
//gulp.task('default', ['watch']);
gulp.task("build", ["estilos", "templates", "libs", "fonts", "images", "js", "jspages"]);
//gulp.task('server', ['connect', 'watch']);
gulp.task("server", ["ServerBrowserSync", "watch"]);

