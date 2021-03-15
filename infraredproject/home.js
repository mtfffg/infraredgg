$(document).ready(function () {
    //if (window.location.href.indexOf("www") < 0) {
    //    window.location.href = 'https://www.infrared.gg';
    //}

});


$(document).on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 27) {
        if ($('.debateDiv').is(':visible')) {
            $('#fightsong')[0].pause()
            $('.debateDiv').css('display', 'none');
            $('#twitterDiv').css('width', '25%');
            $('.viddiv').css('left', '25%').css('width', '75%');
            $('.risingDiv').hide();
        }
        else {
            $('#fightsong')[0].play();
            $('.debateDiv').css('display', 'inline-block');
            $('#twitterDiv').css('width', '20%');
            $('.viddiv').css('left', '40%').css('width', '60%');
            $('.risingDiv').show();
        }
    }
});

//$('.linkheader').mouseover(function () {
//    $('.linkscollection').slideDown();
//});

//$('.linkheader').mouseleave(function () {
//    $('.linkscollection').slideUp();
//});