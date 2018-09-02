$(function () {
    $(function flyTexts() {
        setTimeout(function () {
            $('.fly-in-text').removeClass('hidden');
            $('.fly-in-text2').removeClass('hidden');
        }, 5000);
        setTimeout(function () {
            $('nav').addClass('animate');
            $('nav').css({
                opacity: 1.0
            });
        }, 5500);
        setTimeout(function () {
            $('body').css({
                overflow: 'visible',
                'overflow-x': 'hidden'
            });
        }, 6000);
    });
});

// scroll script
$(function () {
    $(window).scroll(function () {

        let scroll = $(this).scrollTop();
        console.log(scroll);
        
        if (scroll < 50) {
            $('.about div').hide();
            $('.about #pic').css({
                opacity: 0
            });
        }
        if (scroll > 300) {
            $('.about div').show(500);
            setTimeout(function () {
                $('.about #pic').css({
                    opacity: 1.0
                });
            }, 800);
            setTimeout(function () {
                $('.about .underLine').animate({
                    opacity: 1.0,
                    width: 60,
                });
            }, 1200);
            setTimeout(function () {
                $('.about h1').css({
                    opacity: 1.0
                });
            }, 1600);
        }
        if (scroll > 1300) {
            setTimeout(function () {
                $('.skills').css({
                    visibility: 'visible'
                });
                $('#html').animate({
                    width: 250
                }, 1000);
                $('#css').animate({
                    width: 250
                }, 1000);
                $('#javascript').animate({
                    width: 250
                }, 1000);
                $('#java').animate({
                    width: 200
                }, 1000);
                $('#swift').animate({
                    width: 150
                }, 1000);
                $('#mysql').animate({
                    width: 150
                }, 1000);
                $('#react').animate({
                    width: 250
                }, 1000);
                $('#react-native').animate({
                    width: 250
                }, 1000);

            }, 500);
            setTimeout(function () {
                $('.skills .underLine').animate({
                    opacity: 1.0,
                    width: 60,
                });
            }, 1500);
            setTimeout(function () {
                $('.skills h1').animate({
                    opacity: 1.0,
                });
            }, 1900);
        }
        if(scroll > 2000){
            setTimeout(function () {
                $('.slide').animate({
                    opacity: 1.0,
                });
            }, 500);
            setTimeout(function () {
                $('.works .underLine').animate({
                    opacity: 1.0,
                    width: 60,
                });
            }, 1200);
            setTimeout(function () {
                $('.works h1').animate({
                    opacity: 1.0,
                });
            }, 1600);
        }
        if(scroll > 2600){
            setTimeout(function () {
                $('.contact form').animate({
                    opacity: 1.0,
                });
            }, 500);
            setTimeout(function () {
                $('.contact .underLine').animate({
                    opacity: 1.0,
                    width: 60,
                });
            }, 1200);
            setTimeout(function () {
                $('.contact h1').animate({
                    opacity: 1.0,
                });
            }, 1600);
        }
    });
});

// scroll script from menu bar
$(function menuBar() {
    $('.aboutBar').on('click', function () {
        $('html, body').animate({
            scrollTop: 700,
        }, 1000);
        return false;
    });
    $('.skillBar').on('click', function () {
        $('html, body').animate({
            scrollTop: 1380,
        }, 1000);
        return false;
    });
    $('.worksBar').on('click', function () {
        $('html, body').animate({
            scrollTop: 2050,
        }, 1000);
        return false;
    });
    $('.contactBar').on('click', function () {
        $('html, body').animate({
            scrollTop: 2700,
        }, 1000);
        return false;
    });
});

// scroll script from arrow
$(function arrow() {
    $('.toTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
        return false;
    })
});

