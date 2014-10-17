//load the DOM into jQuery
$(document).ready(function () {

    $('.image-next').on('click', function () {
        var activeSlide = $('.active');
        var nextSlide = activeSlide.next();
        //make sure its a carousel slide
        if (!nextSlide.hasClass('hide')) {

            nextSlide = $('.active').first();
        }
        activeSlide.removeClass('active').addClass('hide');
        nextSlide.removeClass('hide').addClass('active');
    });
    $('.image-prev').on('click', function () {
        var activeSlide = $(this).parent().find('.image.active');
        var nextSlide = activeSlide.prev();
        if (!nextSlide.hasClass('image')) {
            nextSlide = $(this).parent().find('.image').last();
        }
        activeSlide.removeClass('active').addClass('hide');
        nextSlide.removeClass('hide').addClass('active');
    });
});
$(document).ready(function () {

    $('.image1-next').on('click', function () {
        var activeSlide = $(this).parent().find('.image.active1');
        var nextSlide = activeSlide.next();
        if (!nextSlide.hasClass('image')) {
            nextSlide = $(this).parent().find('.image').last();
        }
        activeSlide.removeClass('active1').addClass('hide');
        nextSlide.removeClass('hide').addClass('active1');
    });
    $('.image1-prev').on('click', function () {
        var activeSlide = $(this).parent().find('.image.active1');
        var nextSlide = activeSlide.prev();
        if (!nextSlide.hasClass('image')) {
            nextSlide = $(this).parent().find('.image').last();
        }
        activeSlide.removeClass('active1').addClass('hide');
        nextSlide.removeClass('hide').addClass('active1');
    });
});
$(document).ready(function () {

    $('.image2-next').on('click', function () {
        var activeSlide = $('.active2');
        var nextSlide = activeSlide.next();
        //make sure its a carousel slide
        if (!nextSlide.hasClass('hide')) {

            nextSlide = $('.active2').first();
        }
        activeSlide.removeClass('active2').addClass('hide');
        nextSlide.removeClass('hide').addClass('active2');
    });
    $('.image2-prev').on('click', function () {
        var activeSlide = $(this).parent().find('.image.active2');
        var nextSlide = activeSlide.prev();
        if (!nextSlide.hasClass('image')) {
            nextSlide = $(this).parent().find('.image').last();
        }
        activeSlide.removeClass('active2').addClass('hide');
        nextSlide.removeClass('hide').addClass('active2');
    });
});
$(document).ready(function () {

    $('.image3-next').on('click', function () {
        var activeSlide = $('.active3');
        var nextSlide = activeSlide.next();
        //make sure its a carousel slide
        if (!nextSlide.hasClass('hide')) {

            nextSlide = $('.active3').first();
        }
        activeSlide.removeClass('active3').addClass('hide');
        nextSlide.removeClass('hide').addClass('active3');
    });
    $('.image3-prev').on('click', function () {
        var activeSlide = $(this).parent().find('.image.active3');
        var nextSlide = activeSlide.prev();
        if (!nextSlide.hasClass('image')) {
            nextSlide = $(this).parent().find('.image').last();
        }
        activeSlide.removeClass('active3').addClass('hide');
        nextSlide.removeClass('hide').addClass('active3');
    });



    $('body').on('click', '.ajax-get', function () {
        var urlRequest = $(this).data('url');
        //Make the AJAX request
        $.get(urlRequest, function (data) {
            $('#content').html(data);
        });
    });
    $('#contactForm').on('submit', function (event) {
        //Prevent default form behavior (Doesn't allow it to be submitted)
        event.preventDefault();
        //See if form is valid
        if ($(this).valid()) {
            //AJAX POST
            var urlToPostTo = $(this).attr('action');
            //Serialize to convert the form fields to a string we can pass into our $.post() function
            var dataToSend = $(this).serialize();
            $.post(urlToPostTo, dataToSend, function (data) {
                //Update the #container elements with the new HTML returned in the "data" param
                $('#container').html(data);
            });
        }
    });
});
