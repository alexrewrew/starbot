$(document).ready(function () {
    "use strict";

    $("#menu-trigger").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("open");
        $(".nav-panel").slideToggle();

        if($(this).hasClass('open')) {
            disableScroll();
        } else {
            enableScroll();
        }
    });

    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    function disableScroll() {
        if (window.addEventListener) { // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
        document.onkeydown  = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener) {
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        }
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }


    if (window.matchMedia("(max-width: 767px)").matches) {
        $('.menu > li > a').click(function () {
            $(".nav-panel").slideToggle();
            $("#menu-trigger").toggleClass("open");
            enableScroll();
        });
    }
});
$(document).ready(function () {
    "use strict";

    // $(this).html($(this).html().replace('&#8232;'," "));

    $('body').replace('&#8232;', " ");

    //  ----- SLIDER -----

    $('#path1-1').click(function () {
        $('#answers1').removeClass('active');
        $('#step1').removeClass('active');
        $('#step1-1').addClass('active');
        $('#answers1-1').addClass('active');
    });

    $('#path1-2').click(function () {
        $('#answers1').removeClass('active');
        $('#step1').removeClass('active');
        $('#step2-1').addClass('active');
        $('#answers1-1-1').addClass('active');
    });

    $('#path1-1-1').click(function () {
        $('#answers1-1').removeClass('active');
        $('#step1-1').removeClass('active');
        $('#step1-1-1').addClass('active');
        $('#answers1-1-1').addClass('active');
    });

    $('#path1-1-2').click(function () {
        $('#answers1-1').removeClass('active');
        $('#step1-1').removeClass('active');
        $('#step1-1-2').addClass('active');
        $('#answers1-1-2').addClass('active');
    });

    $('#path1-1-1-1').click(function () {
        $('#answers1-1-1').removeClass('active');
        $('#step1-1-1').removeClass('active');
        $('#step2-1').removeClass('active');
        $('#step1-1-1-1').addClass('active');
        $('#answers1-1-1-1').addClass('active');
    });

    $('#path1-1-1-2').click(function () {
        $('#answers1-1-1').removeClass('active');
        $('#step1-1-1').removeClass('active');
        $('#step2-1').removeClass('active');
        $('#step1-1-1-2').addClass('active');
        $('#answers1-1-1-1').addClass('active');
    });


    $('.restart').click(function () {
        $('.step').removeClass('active');
        $('.messenge-variants-answers').removeClass('active');
        $('#step1').addClass('active');
        $('#answers1').addClass('active');
    });

});
