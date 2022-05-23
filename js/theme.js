$(document).ready(function() {



    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function() {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                1000
            );

            return false;
        });
    }


    // window scroll event

    $(window).on("scroll", function() {
        if ($(".stricked-menu").length) {
            var headerScrollPos = 130;
            var stricky = $(".stricked-menu");
            if ($(window).scrollTop() > headerScrollPos) {
                stricky.addClass("stricky-fixed");
            } else if ($(this).scrollTop() <= headerScrollPos) {
                stricky.removeClass("stricky-fixed");
            }
        }
        if ($(".scroll-to-top").length) {
            var strickyScrollPos = 100;
            if ($(window).scrollTop() > strickyScrollPos) {
                $(".scroll-to-top").fadeIn(200);
            } else if ($(this).scrollTop() <= strickyScrollPos) {
                $(".scroll-to-top").fadeOut(200);
            }
        }
    });

    /* Sticky Header */
    window.onscroll = function() { myFunction() };

    var header = document.getElementById("header-main");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }


    /* slider svg animation */

    var $window = $(window);
    var windowWidth = $window.width();
    var windowHeight = $window.height();
    var mousePos = { x: windowWidth / 2, y: windowHeight / 2 };

    $(window).resize(function() {
        windowWidth = $window.width();
        windowHeight = $window.height();
    });

    clip(mousePos);

    $(document).mousemove(function(e) {
        mousePos = { x: e.pageX, y: e.pageY };
        clip(mousePos);
    });

    function clip(mousePos) {
        var pourcPos = {
            'x': mousePos.x * 100 / windowWidth * 2,
            'y': mousePos.y * 100 / windowHeight
        };
        var gapX = pourcPos.x * 30 / 200 - 15;
        var gapY = (15 * (pourcPos.y * 30 / 100 - 15)) / 100;
        var pointTop;
        var pointBottom;
        if (pourcPos.y < 50) {
            pointTop = 150 - pourcPos.x + gapY * gapX;
            pointBottom = 150 - pourcPos.x;
        } else {
            pointTop = 150 - pourcPos.x;
            pointBottom = 150 - pourcPos.x - gapY * gapX;
        }
        if (pourcPos.x < 100) {
            $('.back').addClass('on');
            $('.front').removeClass('on');
        } else if (pourcPos.x > 100) {
            $('.back').removeClass('on');
            $('.front').addClass('on');
        } else {
            $('.back').add('.front').removeClass('on');
        }
        $('.front').css({ 'clip-path': 'polygon(' + pointTop + '% 0%, 100% 0%, 100% 100%, ' + pointBottom + '% 100%)' });
    }

    /* silder animater SVG end */

    /* owl carousel */
    $('.cc-carousel').owlCarousel({
        autoPlay: 3000,
        stopOnHover: true,
        navigation: true,
        paginationSpeed: 1000,
        goToFirstSpeed: 2000,
        singleItem: true,
        autoHeight: true,
        margin: 30,
        nav: true,
        navText: [
            "<i class='bi bi-arrow-left-square-fill'></i>",
            "<i class='bi bi-arrow-right-square-fill'></i>"
        ],

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })

    /* Wow init */
    if ($(".wow").length) {
        var wow = new WOW({
            boxClass: "wow", // animated element css class (default is wow)
            animateClass: "animated", // animation css class (default is animated)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }

    /* menu toggle */
    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    var burgerMenu = function() {

        $('.js-nav-toggle').on('click', function(event) {
            event.preventDefault();
            var $this = $(this);
            if ($('.mobile-navigation').hasClass('menu-show')) {
                $('.mobile-navigation').removeClass('menu-show');
                $('#main-nav > .js-nav-toggle').removeClass('show');
            } else {
                $('.mobile-navigation').addClass('menu-show');
                setTimeout(function() {
                    $('#main-nav > .js-nav-toggle').addClass('show');
                }, 100);
            }
        })
    };
    burgerMenu();


    /* testimonials */


    // Testimonial Two Carousel
    if ($(".testimonials-two__carousel").length) {
        $(".testimonials-two__carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: false,
            smartSpeed: 500,
            autoHeight: false,
            autoplay: true,
            dots: true,
            autoplayTimeout: 10000,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 1,
                },
                800: {
                    items: 2,
                },
                1024: {
                    items: 3,
                },
                1200: {
                    items: 3,
                },
            },
        });
    }

});