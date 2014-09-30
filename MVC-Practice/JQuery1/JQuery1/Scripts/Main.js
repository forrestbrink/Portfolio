//load the DOM into jQueryy
$(document).ready(function () {

    //functions go inside the document.ready() callback
    $('li').on('click', function () { alert('time to party') })
    $(this).css('color', 'red').css('background-color', 'blue');
    $(this).slideup(2000);
});
