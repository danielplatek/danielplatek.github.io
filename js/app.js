$(function() {

    //prevent native touch activity like scrolling
    $('html, body').on('touchstart touchmove', function (e) {
        e.preventDefault();
    });
});