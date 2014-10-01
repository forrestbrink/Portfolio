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