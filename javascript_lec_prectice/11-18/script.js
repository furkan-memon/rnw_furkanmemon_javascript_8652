$(function () {
    let $box = $('#box');
    let $box2 = $('#box2');
  let $playButton = $('#animateMoveBtn') 
  let $audio = $('#myAudio') 

    $('#fadeOutBtn').on('click', function () {
          $audio[0].currentTime = [0];
         $audio[0].play();
        $box.fadeOut('slow');
    });
    $('#fadeInBtn').on('click', function () {
          $audio[0].currentTime = [0];
         $audio[0].play();
        $box.fadeIn('slow');
    });
    $('#fadeToggleBtn').on('click', function () {
          $audio[0].currentTime = [0];
         $audio[0].play();
        $box.fadeToggle(1000);
    });
    $('#fadeToBtn').on('click', function () {
          $audio[0].currentTime = [0];
         $audio[0].play();
                 $box.fadeTo(700, 0.3,);
    });
    $('#fadeResetBtn').on('click', function () {
          $audio[0].currentTime = [0];
         $audio[0].play();
        $box.stop(true).css({ opacity: 1 }).show();
    });


    $('#animateMoveBtn').on('click', function () {
        // $box2.css('left', 0);
        $audio[0].currentTime = [0];
         $audio[0].play();
        $box2.animate({
           
            // left:"200px",
            top:'200px',
            width: '180px',
            height: '80px',
            opacity: 0.85
        },
        {
            duration: 1000,
            easing: 'swing',
            complete: function () {
                $(this).animate({ left: '200px', top:'200' , width: '120px', height: '80px', opacity: 1 }, 600, 'swing');
                $(this).animate({ left: '200px', top:'200' , width: '120px', height: '80px', opacity: 1 }, 600, 'swing');
                $(this).animate({ left: '0px', top:'200',right:'100px' , width: '120px', height: '120px', opacity: 1 }, 600, 'swing');
                $(this).animate({ left: '0px', top:'0',right:'0px' , width: '120px', height: '120px', opacity: 1 }, 600, 'swing');
                
            }
        }
    );
    });


    $('#animateResetBtn').on('click', function () {
          $audio[0].currentTime = [0];
         $audio[0].play();
        $box2.stop(true).css({ left: 0,right:'0px',  top:0 , width: '120px', height: '120px', opacity: 1 });

    });



});