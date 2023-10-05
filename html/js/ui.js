//  스크롤 헤더
$(function () {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 30) {
            $("header").addClass('fixed')
        } else {
            $("header").removeClass('fixed')
        };
    })
})
$(function () {
    //네비 스크롤이동
    function scrollPosition() {
        let navBlock = $('.nav'),
            scrollPos = $(window).scrollTop();
        navBlock.find('a').each(function () {
            let block = $($(this).attr('href'));
            if ((block.position().top) <= scrollPos + 400 && (block.position().top) + block.outerHeight() > scrollPos) {
                navBlock.find('li').removeClass('active');
                $(this).parent('li').addClass('active');
            } else {
                $(this).parent('li').removeClass('active');
            }
        });
    }
    $(window).scroll(function () {
        scrollPosition();
    });
    let navBlock = $('.nav, .m-nav');
    navBlock.find('a').click(function (e) {
        e.preventDefault();
        $(".bg-shadow").trigger("click");
        $(document).off('scroll');
        let block = $(this).attr('href');
        let blockPosition = $(block).offset().top;
        $('html, body').animate({
            scrollTop: blockPosition - 80
        }, 600, function () {
            scrollPosition();
        });
    });
});

//모바일해더
$(function () {
    //햄버거아이콘
    $(".m-btn").click(function () {
        $(this).toggleClass('act');
        $(".m-header").toggleClass('act');
        $(".bg-shadow").toggleClass('act');
        $(".m-nav").stop().slideToggle();
    })
    $(".bg-shadow").click(function () {
        $(this).removeClass('act');
        $(".m-header").removeClass('act');
        $(".m-btn").removeClass('act');
        $(".m-nav").slideUp();
    })
})
