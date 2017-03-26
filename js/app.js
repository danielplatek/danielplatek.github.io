document.addEventListener("DOMContentLoaded", function () {

    //prevent native touch activity like scrolling
    var body = document.querySelector('html, body');

    body.addEventListener('touchmove', function (e) {
        e.preventDefault();
    });
});

/*  ============    jQuery ver  ============
$(function() {

    //prevent native touch activity like scrolling
    var $body = $('html, body')
    $body.on('touchmove', function (e) {
        e.preventDefault();
    });
});
*/