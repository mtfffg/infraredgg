$('.mainGlobe').click(function () {
    if ($('.debateDiv').is(':visible')) {
        $('.debateDiv').css('display', 'none');
        $('#twitterDiv').css('width', '25%');
        $('.viddiv').css('left', '25%').css('width', '75%');
        $('.risingDiv').hide();
        showAudio('hide');
        showDebateBoxes('hide');
    }
    else {
        $('.debateDiv').css('display', 'inline-block');
        $('#twitterDiv').css('width', '20%');
        $('.viddiv').css('left', '40%').css('width', '60%');
        $('.risingDiv').show();
        showAudio('show');
        showDebateBoxes('show');
    }
});

$(document).on('click', '.debatebox', function () {
    var id = $(this).data('id');    
    var open = false;
    var modalbody = '';
    var modaltitle = '';

    switch (id) {
        case 4://vaush
            open = true;
            modaltitle = 'INFRARED VS VAUSH';                        
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://yewtu.be/embed/T-djYWAhrnM" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';                   
            break;
        case 5://destiny
            open = true;
            modaltitle = 'INFRARED VS DESTINY';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://yewtu.be/embed/HB55g2kunNU" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
            break;
        case 6://fellow traveler
            open = true;
            modaltitle = 'INFRARED VS FELLOW TRAVELER';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://yewtu.be/embed/AM838wusAmQ" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
            break;
        case 7://jolah
            open = true;
            modaltitle = 'INFRARED VS JOLAH';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://yewtu.be/embed/Mml7rXLQoTQ" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
            break;
        case 8://leftism today
            open = true;
            modaltitle = 'INFRARED VS LEFTISM TODAY';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://yewtu.be/embed/mDM2ojVYdrw" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';            
            break;
        case 9://socialism done left
            open = true;
            modaltitle = 'INFRARED VS SOCIALISM DONE LEFT';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://yewtu.be/embed/xIlceNoYvGs" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';            
            break;
        case 10://xanderthal
            open = true;
            modaltitle = 'INFRARED VS XANDERTHAL';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://yewtu.be/embed/FFsIPOuOBg4" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';            
            break;
        case 11://kevin logan
            open = true;
            modaltitle = 'INFRARED VS KEVIN LOGAN';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://yewtu.be/embed/CitM_kAZ_9M" frameborder="0" allow="accelerometer;' +
                ' autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';            
            break;
        case 12://dylan burns tv and sondsol
        case 13:
            open = true;
            modaltitle = 'INFRARED VS DYLAN BURNS TV & SONDSOL';
            modalbody = '<div class="youtubevod" style="height:75vh;"><iframe width="100%" height="100%" src="https://yewtu.be/embed/7UpCH57lcbQ" frameborder="0" allow="accelerometer;' +
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

function showDebateBoxes(type) {
    if (type == 'show') {
        if ($('.debateDiv .maincolorButton').length) {
            $('.debateDiv').show();
        }
        else {
            var debatebox = '<label class="maincolorButton mainLabel">DEBATE LIST</label>' +
                ' <div class="debatebox" data-id="1" > ' +
                ' <img class="debateimg" src = "infrareddebates/biden.jpg" /><br /><br />' +
                ' <label class="debatename maincolorButton" > BIDEN</label> ' +
                ' </div> ' +
                ' <div class="debatebox" data-id="2"> ' +
                ' <img class="debateimg" src = "infrareddebates/aoc.jpg" /><br /><br />' +
                ' <label class="debatename maincolorButton" > AOC</label> ' +
                ' </div > ' +
                ' <div class="debatebox" data-id="3"> ' +
                ' <img class="debateimg" src = "infrareddebates/thoughtslime.png" /><br /><br />' +
                ' <label class="debatename maincolorButton" > THOUGHTSLIME</label> ' +
                ' </div > ' +
                ' <div class="debatebox" data-id="4" > ' +
                ' <img class="debateimg" src = "infrareddebates/Vaush.jpg" /><br /><br />' +
                ' <label class="debatename maincolorButton" > VAUSH</label> ' +
                ' <img class="defeated" src = "infrareddebates/redX.png" /> ' +
                ' </div> ' +
                ' <div class="debatebox" data-id="5">' +
                ' <img class="debateimg" src = "infrareddebates/destiny.jpg" /><br /><br />' +
                ' <label class="debatename maincolorButton" > DESTINY</label> ' +
                ' <img class="defeated" src = "infrareddebates/redX.png" /> ' +
                ' </div> ' +
                ' <div class="debatebox" data-id="6" > ' +
                '     <img class="debateimg" src="infrareddebates/fellowtraveler.jpg" /><br /><br />   ' +
                '     <label class="debatename maincolorButton">FELLOW TRAVELER</label>                ' +
                '     <img class="defeated" src="infrareddebates/redX.png" />                          ' +
                ' </div>                                                                               ' +
                ' <div class="debatebox" data-id="7">                                                  ' +
                '     <img class="debateimg" src="infrareddebates/jolah.jpg" /><br /><br />            ' +
                '     <label class="debatename maincolorButton">JOLAH</label>                          ' +
                '     <img class="defeated" src="infrareddebates/redX.png" />                          ' +
                ' </div>                                                                               ' +
                ' <div class="debatebox" data-id="8">                                                  ' +
                '     <img class="debateimg" src="infrareddebates/leftismtoday.jpg" /><br /><br />     ' +
                '     <label class="debatename maincolorButton">LEFTISM TODAY</label>                  ' +
                '     <img class="defeated" src="infrareddebates/redX.png" />                          ' +
                ' </div>                                                                               ' +
                ' <div class="debatebox" data-id="9">                                                  ' +
                '     <img class="debateimg" src="infrareddebates/socialismdoneleft.png" /><br /><br />' +
                ' <label class="debatename maincolorButton" > SOCIALISM DONE LEFT</label> ' +
                ' <img class="defeated" src="infrareddebates/redX.png" />' +
                ' </div > ' +
                ' <div class="debatebox" data-id="10"> ' +
                '     <img class="debateimg" src="infrareddebates/xanderthal.jpg" /><br /><br />' +
                '     <label class="debatename maincolorButton">XANDERTHAL</label>              ' +
                '     <img class="defeated" src="infrareddebates/redX.png" />                   ' +
                ' </div>                                                                        ' +
                ' <div class="debatebox" data-id="11">                                          ' +
                '     <img class="debateimg" src="infrareddebates/kevinlogan.jpg" /><br /><br />' +
                '     <label class="debatename maincolorButton">KEVIN LOGAN</label>             ' +
                '     <img class="defeated" src="infrareddebates/redX.png" />                   ' +
                ' </div>                                                                        ' +
                ' <div class="debatebox" data-id="12">                                          ' +
                '     <img class="debateimg" src="infrareddebates/dylanburns.jpg" /><br /><br />' +
                '     <label class="debatename maincolorButton">DYLAN BURNS TV</label>          ' +
                '     <img class="defeated" src="infrareddebates/redX.png" />                   ' +
                ' </div>                                                                        ' +
                ' <div class="debatebox" data-id="13">                                          ' +
                '     <img class="debateimg" src="infrareddebates/sondsol2.png" /><br /><br />  ' +
                '     <label class="debatename maincolorButton">SONDSOL</label>                 ' +
                '     <img class="defeated" src="infrareddebates/redX.png" />                   ' +
                ' </div>                                                                        ' +
                ' <div class="debatebox" data-id="14">                                          ' +
                '     <img class="debateimg" src="infrareddebates/leftypol.jpg" /><br /><br />  ' +
                '     <label class="debatename maincolorButton">LEFTYPOL</label>                ' +
                '     <img class="defeated" src="infrareddebates/redX.png" />                   ' +
                ' </div>';
            $('.debateDiv').append(debatebox);
            $('.debateDiv').show();
        }    
    }
    else if (type == 'hide') {
        $('.debateDiv').hide();
    }   
}

function showAudio(type) {
    var audio = '<audio id="fightsong" controls style="display:none;"><source src="infraredsong.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio>' +
        '<div class="youtubevod risingDiv"><img src="https://j.gifs.com/r8KJLk.gif" style="width:100%;" /></div>';     

    if (type == 'show') {
        if ($('#fightsong').length) {
            $('#fightsong').show();
            $('#fightsong')[0].play();
        }
        else {
            $('.ytdiv').prepend(audio);
            $('#fightsong').show();
            $('#fightsong')[0].play();
        }
    }
    else if (type == 'hide') {
        $('#fightsong')[0].pause()
        $('#fightsong').hide();
    }    
}
