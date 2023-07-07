$(function () {
    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.Header .container').addClass('on')
            : $('.Header .container').removeClass('on')
    });


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('.scr_ev').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on')
            }
            else {
                $(this).removeClass('on')
            };

        })
    });


    $('.hd_btn').on('click', function () {
        $(this).toggleClass('on');
        $('.Header').toggleClass('on');
    });


    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        centermode: true,
        on: {
            slideChangeTransitionStart: function () {
                $('.mainVisual .mv_dots li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }

    });

    $('.mainVisual .mv_arrows .left').on('click', function () {
        mainSlide.slidePrev();
    });
    $('.mainVisual .mv_arrows .right').on('click', function () {
        mainSlide.slideNext();
    });

    $('.mainVisual .mv_dots li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        mainSlide.slideTo(idx + 1);
    })


    $(".main_slide").on('mousewheel', function (e) {
        var wheel = e.originalEvent.wheelDelta;

        if (wheel > 0) {
            //스크롤 올릴때 
            $(this).removeClass('on');

        } else {
            //스크롤  내릴때 
            $(this).addClass('on');
        }

    });



    const brandSlide = new Swiper('.brand_slide', {
        loop: true,
        draggable: true,
        on: {
            slideChangeTransitionStart: function () {
                $('.mainBrand .brand_list li')
                    .eq(this.realIndex)
                    .addClass('on')
                    .siblings()
                    .removeClass('on')
            }
        }
    });

    $('.mainBrand .brand_list li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on')
        brandSlide.slideTo(idx + 1);
    });


    // $(".brand_slide .box").on('mousewheel', function (e) {
    //     var wheel = e.originalEvent.wheelDelta;

    //     if (wheel > 0) {
    //         $(this).removeClass('on');

    //     } else {
    //         $(this).addClass('on');
    //     }

    // });



    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 3200) {
            $('.link_sns').fadeIn();
        } else {
            $('.link_sns').fadeOut();
        }
    });

    $('.scr_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 700 ? $('.scr_top').addClass('on') : $('.scr_top').removeClass('on');
        //show, hide   fadeIn, fadeOut 으로 대체 가능
    });

})