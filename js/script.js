// make nav-link active by click
$(document).ready(function() {
    // Active this Element when user in index page
    $('.index-active').addClass('active');

    // -- index page script --
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    })
    // wrap sidebar
    $('#toggler').click(function() {
        $('#wrap').toggleClass('toggled');
        var sidebar_right = $('.sidebar').css('right');
        if (sidebar_right == '0px') {
            $('.sidebar').css('right', '-17rem');
            $('.layer').fadeOut();
        }
        else {
            $('.sidebar').css('right', '0px');
            $('.layer').fadeIn();
        }
    })
    $('.layer').click(function() {
        $('.sidebar').css('right', '-17rem');
        $(this).fadeOut();
    })
    // show search bar when search icon clicked
    $('.search-icon').click(function() {
        $('.search-bar').slideToggle('slow');
    })


    // -- search page script --
    $('#filter-icon').click(function() {
        $('.filter-col').slideToggle('slow');
    })

    // check only one checkboxes
    $('input:checkbox').click(function() {

        if ($(this).is(':checked')) {
            $("input:checkbox[name='" + $(this).attr("name") + "']").prop('checked', false);
            $(this).prop('checked', true);
        }
    })

    // -- log page script --

    // remove last view by click
    $('.remove').click(function() {
        $(this).parents('.card').hide();
    })

    // -- watch page script --

    // show more when button clicked
    $('#show-more').click(function() {
        var more = $('#more').css('display');

        if (more === 'none') {
            $('#dots').css('display', 'none');
            $('#more').css('display', 'inline');
            $('#show-more').html('عرض أقل');
        }
        else {
            $('#dots').css('display', 'inline');
            $('#more').css('display', 'none');
            $('#show-more').html('عرض المزيد');
        }
    })

    // show and hide replay comments
    $('.replay-btn').click(function() {
        $(this).parents('div.row').next('div.card-inner').toggle();
    })
})