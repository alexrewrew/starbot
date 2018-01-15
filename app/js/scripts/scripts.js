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
