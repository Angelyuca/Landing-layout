$('.popup').css('display', 'none');

$('#menu-button').click(function () {
    $('.wrap').css('filter', 'blur(3px) brightness(60%)');
    $('.popup').fadeIn();
    $('body').css('overflow-y', 'hidden');
});

$('#back, .menu-mobile-version a').click(function () {
    $('.wrap').css('filter', 'none');
    $('.popup').fadeOut();
    $('body').css('overflow-y', 'auto');
});


$('.button-phone, #mv-icon-phone').click(function () {
    $('.wrap').css('filter', 'blur(3px) brightness(60%)');
    $('.js-fade').fadeIn();
    $('body').css('overflow-y', 'hidden');
    $("#telephone").mask("+38 (099) 999-99-99");
});

$('.close-popup').click(function () {
    $('#telephone').val('');
    $('.wrap').css('filter', 'none');
    $('.js-fade').fadeOut();
    $('body').css('overflow-y', 'auto');
});


$('.mv-button-phone').click(function () {
    $('.popup').fadeOut();
    $('.js-fade').fadeIn();
});

$(function () {
    let menu_top = $('.panel').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > menu_top) {
            if ($('.panel').css('position') != 'fixed') {
                $('.panel').addClass("header_min");
                $('.block-button-phone').css('padding-top', '80px');
            }
        } else {
            if ($('.panel').css('position') == 'fixed') {
                $('.panel').removeClass("header_min");
                $('.block-button-phone').css('padding-top', '');
            }
        }
    });
});


$(function () {
    let menu_top = $('.panel-mobile').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > menu_top) {
            if ($('.panel-mobile').css('position') != 'fixed') {
                $('.panel-mobile').addClass("mv-header_min");
                $('.mobile-header-content').css('padding-top', '80px');
            }
        } else {
            if ($('.panel-mobile').css('position') == 'fixed') {
                $('.panel-mobile').removeClass("mv-header_min");
                $('.mobile-header-content').css('padding-top', '');
            }
        }
    });
});



$(document).ready(function () {

    $('article').readmore({
        speed: 250, //скорость раскрытия скрытого текста (в миллисекундах)
        maxHeight: 85, //высота раскрытой области текста (в пикселях)
        collapsedHeight: 75,
        heightMargin: 16, //избегание ломания блоков, которые больше maxHeight (в пикселях)
        moreLink: '<button class="button-readmore">Подробнее о нас</button>',
        lessLink: '<button class="button-readmore">Скрыть</button>',
    });


    $(".list a, .menu-mobile-version a").click(function () {
        let elementClick = jQuery(this).attr("href");
        console.log(elementClick);
        let destination = jQuery(elementClick).offset().top - 78;
        $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
        return false;
    });

});