$(function() {

    var url = "https://api.nasa.gov/planetary/apod";
    var key = '&api_key=s7RAdgJ0dLEAiWBs9pCUNLPOSQzMeBdRunqrKI2c';
    var hd = '&hd=bool';
    var $photo = $('#newNASAphoto');

    /* ---- random number ---- */
    function getRandomInt( min, max ){
        return Math.floor( Math.random() * ( max - min + 1 ) + min );
    }

    /* ---- random date ---- */
    var year = getRandomInt(2010,2016);
    var month = getRandomInt(1,12);
    var day = getRandomInt(1,28);
    var  newDate = year + '-' + month + '-' +day;

    /* ---- NASA API ---- */
    $.ajax({
        url: url + '?date=' +newDate+key,
    }).done(function (response) {
        // console.log(response);
        var $img = $('<img>',{'src': response.hdurl});
        $photo.append($img);

    }).fail(function (error) {
        // console.log(error);
    });

    /* ---- Next random img ---- */
    $('#nextBtn').on('click', function(){
        console.log('click');

    })

});