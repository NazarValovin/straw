$(function() {
    $(".best-sellers > .main-area .categories .item").click(function(e) {
        $(".best-sellers > .main-area .categories .item").removeClass("checked");
        $(this).addClass("checked");
        let currentText = $(this).text();

        $(".best-sellers > .main-area .products .product").each(function(i,elem) {
            $(this).removeClass("checked");
            if ($(this).data("product") == currentText) {
                $(this).addClass("checked");
            }
        });

    });
});
$(function() {
    if ($(window).width() < 555) {
        $(".header .search-form .icon-button").click(function(e) {
            e.preventDefault();
            // if($(this).hasClass('active')){
            //     console.log('active')
            //     $(".header .search-form .search-input").removeClass("active");
            //     $(".header .search-form .icon-button").removeClass("active");
            // }else{
            //     console.log('not-active')
                $(".header .search-form .search-input").addClass('active');
                $(this).addClass('active');
            // }

        })
        $(document).mouseup(function (e){
            let div = $(".header .search-form .search-input");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                $(".header .search-form .search-input").removeClass("active");
                $(".header .search-form .icon-button").removeClass("active");
            }
        });
    }

    if ($(window).width() < 770) {
        $(".best-sellers > .main-area .products .item:first-child").addClass('active')
        $(".best-sellers > .main-area .products .item:nth-child(2)").addClass('active')
        $(".best-sellers > .main-area .products .item:nth-child(3)").addClass('active')
        // $(".best-sellers > .main-area .products .item").hasClass( "active" )
    }
    if ($(window).width() < 680) {
        $(".best-sellers > .main-area .products .item:first-child").addClass('active')
        $(".best-sellers > .main-area .products .item:nth-child(2)").addClass('active')
        $(".best-sellers > .main-area .products .item:nth-child(3)").removeClass('active')
        // $(".best-sellers > .main-area .products .item").hasClass( "active" )
    }

    $(".button-more-title").click(function(e) {
        if($(this).hasClass( "show" )){
            $(this).parent().parent().find('.item').removeClass('active');
            if ($(window).width() < 770) {
                $(".best-sellers > .main-area .products .item:first-child").addClass('active')
                $(".best-sellers > .main-area .products .item:nth-child(2)").addClass('active')
                $(".best-sellers > .main-area .products .item:nth-child(3)").addClass('active')
                // $(".best-sellers > .main-area .products .item").hasClass( "active" )
            }
            if ($(window).width() < 680) {
                $(".best-sellers > .main-area .products .item:first-child").addClass('active')
                $(".best-sellers > .main-area .products .item:nth-child(2)").addClass('active')
                $(".best-sellers > .main-area .products .item:nth-child(3)").removeClass('active')
                // $(".best-sellers > .main-area .products .item").hasClass( "active" )
            }
            $(this).removeClass('show');
            $(this).text('View all');
        }else{
            $(this).parent().parent().find('.item').addClass('active');
            $(this).addClass('show');
            $(this).text('Hide');
        }

    })

    $(".mob-menu > .item.has-child a").click(function(e) {
        e.preventDefault()
        $(this).parent().toggleClass('active');
        $(this).parent().find('.sub-mob-menu').toggleClass('active');
    })
    $(".mob-menu-icon").click(function(e) {
        $(".mob-area").addClass('active');
    })
    $(".mob-area > .mob-wrapper > .close-button").click(function(e) {
        $(this).parent().parent().removeClass('active');
    })

});
$(document).ready(function(){
    $('.reviews .items .wrapper').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        appendDots: '.reviews .panel .indicators',
        appendArrows:'.reviews .panel',
        prevArrow:'<div class="arrow left"></div>',
        nextArrow:'<div class="arrow right"></div>',
        responsive: [
            {
                breakpoint: 980,
                settings: {
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ],
    });

    $('.main-slider .wrapper').slick({
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        appendDots: '.main-slider .panel',
    });

    // product slider
    // $('.slider-product .slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // arrows: true,
    //     fade: true,
    //     // dots: true,
    //     asNavFor: '.slider-nav',
    //
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    //     infinite: true,
    //     speed: 300,
    //     // centerMode: true,
    //     // variableWidth: true,
    //     appendDots: '.slider-product .panel .indicators',
    //     appendArrows:'.slider-product .panel',
    //     prevArrow:'<div class="arrow left"></div>',
    //     nextArrow:'<div class="arrow right"></div>',
    // });
    // $('.slider-product .slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     centerMode: true,
    //     focusOnSelect: true
    // });
    // // product slider

    $('.slider-main').slick({
        slidesToShow: 1,
        // fade: true,
        arrows: true,
        dots: true,
        asNavFor: '.slider-nav',
        vertical: true,
        autoplay: true,
        centerMode: false,
        appendDots: '.services-slider .panel .indicators',
        appendArrows:'.services-slider .panel',
        prevArrow:'<div class="arrow left"></div>',
        nextArrow:'<div class="arrow right"></div>',
    });

    $('.slider-nav').slick({
        slidesToShow: 4,
        asNavFor: '.slider-main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: false,
        // arrow: true,
        // prevArrow: '<p>text</p>'
    });

    $(window).on('resize orientationchange', function() {
        if ($(window).width() > 1200) {
            $('.slider-nav').slick('unslick');
            $('.slider-nav').slick({
                slidesToShow: 4,
                asNavFor: '.slider-main',
                vertical: true,
                focusOnSelect: true,
                autoplay: false,
                centerMode: true
            });
        }
    });

    if ($(window).width() < 555) {
        $(".product .wrapper > .main-text-area .extra-gift .items-area .item:nth-child(4)").removeClass('show')
    }else{
        $(".product .wrapper > .main-text-area .extra-gift .items-area .item:nth-child(4)").addClass('show')
    }
    $(".product .wrapper > .main-text-area .description-mob .items .item .title").click(function(e) {
        $(this).parent().toggleClass('show');
    })
    $(".product .wrapper > .main-text-area .size-area .items-area .item").click(function(e) {
        $(".product .wrapper > .main-text-area .size-area .items-area .item").removeClass('current');
        $(this).addClass('current');
    })
});