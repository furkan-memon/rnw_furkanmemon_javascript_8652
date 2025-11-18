$(function () {
    let $box = $('#box');
    let $box2 = $('#box2');


    $('#fadeOutBtn').on('click', function () {
        $box.fadeOut('slow');
    });
    $('#fadeInBtn').on('click', function () {
        $box.fadeIn('slow');
    });
    $('#fadeToggleBtn').on('click', function () {
        $box.fadeToggle(1000);
    });
    $('#fadeToBtn').on('click', function () {
        $box.fadeTo(700, 0.3,);
    });
    $('#fadeResetBtn').on('click', function () {
        $box.stop(true).css({ opacity: 1 }).show();
    });


    $('#animateMoveBtn').on('click', function () {
        $box2.css('left', 0);
        $box2.animate({
            top:'200px',
            width: '180px',
            height: '80px',
            opacity: 0.85
        },
        {
            duration: 800,
            easing: 'swing',
            complete: function () {
                $(this).animate({ left: '0px', top:'0' , width: '120px', height: '120px', opacity: 1 }, 600, 'swing');
            }
        }
    );
    });


    $('#animateResetBtn').on('click', function () {
        $box2.stop(true).css({ left: 0,  top:0 , width: '120px', height: '120px', opacity: 1 });

    });



});