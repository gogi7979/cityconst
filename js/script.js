$(function(){
    //aos
    $(window).on('scroll', function(){
        AOS.init({
            once: true
        });
    })
    
    //header btn-top
    $(window).scroll(function(){
        if($(window).scrollTop() > 80) {
            $('header, aside').addClass('active')
        }
        else {
            $('header, aside').removeClass('active')
        }
    })
    
    //header submenu
    $('.header__nav li').mouseover(function(){
        $(this).children('.header__sub-menu').addClass('active')
    })
    $('.header__nav li').mouseleave(function(){
        $(this).children('.header__sub-menu').removeClass('active')
    })
     $('header button').click(function(){
        $('.header__nav--mobile').slideToggle()
    })
    $('.header__nav--mobile li').click(function(){
        $(this).siblings().children('.header__sub-menu').slideUp()
        $(this).children('.header__sub-menu').stop().slideToggle()
    })
    
    //slick
    $('.slide').slick({
            fade: true,
            cssEase: 'linear',
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3500,
            pauseOnHover: false,
            dots: true,
            arrows: true
        });
    
    //modal
    $('.brand__box button').click(function(){
        $('.brand__modal, .brand__list').addClass('active')
        $('.brand__modal').on('scroll touchmove mousewheel', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        })
    })
    $('.brand__modal button').click(function(){
        $('.brand__modal, .brand__list').removeClass('active')
        $('.brand__modal').off('scroll touchmove mousewheel')
    })
})