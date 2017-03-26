$(function() {

    //prevent native touch activity like scrolling
    $('html, body').on('touchmove', function (e) {
        e.preventDefault();
    });
});