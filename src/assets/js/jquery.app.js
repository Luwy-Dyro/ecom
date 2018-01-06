

(function ($) {

    'use strict';

    // Efecto scrolling para el Menu
    function initSlimscrollMenu() {
        $('.slimscroll-menu').slimscroll({
            height: '550px',
            position: 'right',
            size: "8px",
            color: '#9ea5ab',
            wheelStep: 5        
        });
    }

    // Efecto scrolling para cajas del dasboard
    function initSlimscroll() {
        $('.slimscroll').slimscroll({
            height: '550px',
            position: 'right',
            size: "8px",
            color: '#9ea5ab'
        });
    }


    // Configuro las acciones de MetisMenu
    function initMetisMenu() {
        //metis menu
        $("#side-menu").metisMenu({
            //preventDefault: false
            // toggle: false,
            // activeClass: 'active',
            // collapseInClass: 'in',
            // collapsingClass: 'collapsing'
        });
        
    }

    // Accion al presiona boton gamburguesa
    function initLeftMenuCollapse() {
        // Left menu collapse
        $('.button-menu-mobile').on('click', function (event) {
            event.preventDefault();
            $("body").toggleClass("menul_compress");
        });
    }


    //Decimos en que resolucion se vera comprimido
    // function menul_compress() {
    //     if ($(window).width() < 1025) {
    //         $('body').addClass('.menul_compress');
    //     } else {
    //         $('body').removeClass('.menul_compress');
    //     }
    // }


    // function initActiveMenu() {
    //     //
    //     $("#sidebar-menu a").each(function () {
    //         if (this.href == window.location.href) {
    //             $(this).addClass("active");
    //             // add active to li of the current link
    //             $(this).parent().addClass("active"); 
    //             $(this).parent().parent().addClass("in");
    //             // add active class to an anchor
    //             $(this).parent().parent().prev().addClass("active"); 
    //             $(this).parent().parent().parent().addClass("active");
    //             $(this).parent().parent().parent().parent().addClass("in"); // add active to li of the current link
    //             $(this).parent().parent().parent().parent().parent().addClass("active");
    //         }
    //     });
    // }

    function init() {
        initSlimscrollMenu();
        initSlimscroll();
        initMetisMenu();
        initLeftMenuCollapse();
        //  menul_compress();
        //initActiveMenu();
    }

    init();

})(jQuery)

