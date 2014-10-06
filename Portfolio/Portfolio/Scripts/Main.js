//load the DOM into jQueryy
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
});
$(document).ready(function () {

    $('.image1-next').on('click', function () {
        var activeSlide = $('.active1');
        var nextSlide = activeSlide.next();
        //make sure its a carousel slide
        if (!nextSlide.hasClass('hide')) {

            nextSlide = $('.active1').first();
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
    $('#content').on('click', '.ajax-get', function () {
        //get the url to GET from the data-url attribute
        var urlRequest = $(this).data('url');
        //make the AJAX request
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
