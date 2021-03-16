$(document).ready(function () {
    //if (window.location.href.indexOf("www") < 0) {
    //    window.location.href = 'https://www.infrared.gg';
    //}
});


$('.mainGlobe').click(function () {
    if ($('.debateDiv').is(':visible')) {
        $('.debateDiv').css('display', 'none');
        $('#twitterDiv').css('width', '25%');
        $('.viddiv').css('left', '25%').css('width', '75%');
        $('.risingDiv').hide();
        $('#fightsong')[0].pause()
        $('#fightsong').hide();
    }
    else {
        $('.debateDiv').css('display', 'inline-block');
        $('#twitterDiv').css('width', '20%');
        $('.viddiv').css('left', '40%').css('width', '60%');
        $('.risingDiv').show();
        $('#fightsong').show();
        $('#fightsong')[0].play();
    }
});

$('.debatebox').click(function () {
    var id = $(this).data('id');

    switch (id) {
        case 4://vaush
            window.open(
                "https://www.youtube.com/watch?v=T-djYWAhrnM", "_blank");
            break;
        case 5://destiny
            window.open(
                "https://www.youtube.com/watch?v=HB55g2kunNU", "_blank");
            break;
        case 6://fellow traveler
            window.open(
                "https://www.youtube.com/watch?v=AM838wusAmQ", "_blank");
            break;
        case 7://jolah
            window.open(
                "https://www.youtube.com/watch?v=Mml7rXLQoTQ", "_blank");
            break;
        case 8://leftism today
            window.open(
                "https://www.youtube.com/watch?v=mDM2ojVYdrw", "_blank");
            break;
        case 9://socialism done left
            window.open(
                "https://www.youtube.com/watch?v=xIlceNoYvGs", "_blank");
            break;
        case 10://xanderthal
            window.open(
                "https://www.youtube.com/watch?v=FFsIPOuOBg4", "_blank");
            break;
        case 11://kevin logan
            window.open(
                "https://www.youtube.com/watch?v=CitM_kAZ_9M", "_blank");
            break;
        case 12://dylan burns tv and sondsol
        case 13:
            window.open(
                "https://www.youtube.com/watch?v=7UpCH57lcbQ", "_blank");
            break;
    }
});

//$('.linkheader').mouseover(function () {
//    $('.linkscollection').slideDown();
//});

//$('.linkheader').mouseleave(function () {
//    $('.linkscollection').slideUp();
//});



//RewriteEngine on
//RewriteCond % { HTTP_HOST } ^ infrared\.gg$
//RewriteRule ^ /?$ "https\:\/\/www\.infrared\.gg\/" [R=301,L]