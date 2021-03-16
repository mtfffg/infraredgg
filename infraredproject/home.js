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
    var open = false;
    var modalbody = '';
    var modaltitle = '';

    switch (id) {
        case 4://vaush
            open = true;
            modaltitle = 'INFRARED VS VAUSH';            
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://invidious.snopyta.org/embed/T-djYWAhrnM" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';                   
            break;
        case 5://destiny
            open = true;
            modaltitle = 'INFRARED VS DESTINY';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://invidious.snopyta.org/embed/HB55g2kunNU" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
            break;
        case 6://fellow traveler
            open = true;
            modaltitle = 'INFRARED VS FELLOW TRAVELER';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://invidious.snopyta.org/embed/AM838wusAmQ" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
            break;
        case 7://jolah
            open = true;
            modaltitle = 'INFRARED VS JOLAH';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://invidious.snopyta.org/embed/Mml7rXLQoTQ" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
            break;
        case 8://leftism today
            open = true;
            modaltitle = 'INFRARED VS LEFTISM TODAY';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://invidious.snopyta.org/embed/mDM2ojVYdrw" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';            
            break;
        case 9://socialism done left
            open = true;
            modaltitle = 'INFRARED VS SOCIALISM DONE LEFT';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://invidious.snopyta.org/embed/xIlceNoYvGs" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';            
            break;
        case 10://xanderthal
            open = true;
            modaltitle = 'INFRARED VS XANDERTHAL';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://invidious.snopyta.org/embed/FFsIPOuOBg4" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';            
            break;
        case 11://kevin logan
            open = true;
            modaltitle = 'INFRARED VS KEVIN LOGAN';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://invidious.snopyta.org/embed/CitM_kAZ_9M" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';            
            break;
        case 12://dylan burns tv and sondsol
        case 13:
            open = true;
            modaltitle = 'INFRARED VS DYLAN BURNS TV & SONDSOL';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://invidious.snopyta.org/embed/7UpCH57lcbQ" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';            
            break;
    }

    if (open) {
        $('.debatevidBody').empty();
        $('.debatevidTitle').text(modaltitle);
        $('.debatevidBody').append(modalbody);            
        $('#debatevidModal').modal('show');
    }
});

$('.modaldebateClose').click(function () {
    $('.debatevidBody').empty();
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