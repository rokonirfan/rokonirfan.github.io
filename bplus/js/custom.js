$(document).ready(function(){
    
    'use strict'
    
    //HEADER SECTION FUNCTIONALITY
        var navOffset = $("nav").offset().top;
        $(window).on("scroll", function(){
            var scrollAmount = $(this).scrollTop();
            
            if(scrollAmount <= navOffset ){
                $("nav").removeClass("nav-fixed");
            }else{
                $("nav").addClass("nav-fixed");
            }
            
        });
    
    //AOS INIT
        AOS.init();
    
    //BANNER SECTION FUNCTIONALITY
    $("#myBanner").slick({
        dots: false,
        arrows: false,
        autoplay: true,
        duration: 400,
    });
    
    //CLIENTS SECTION FUNCTIONALITY
        //ACTIVITING THE CLIENTS TEXT SLIDER
         $('.clients-feedback').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              fade: false,
               
              asNavFor: '.clients-img'
        });
        $('.clients-img').slick({
              slidesToShow: 3,
              slidesToScroll: 1,
              asNavFor: '.clients-feedback',
              dots: true,/*
              centerMode: true,*/
              focusOnSelect: true,
              arrows: false,
            
        });
    
    //FEATURES SECTION FUNCTIONALITIES
        //PULSING THE SHAPE
       
    
    
    //ABOUT COUNTER SECTION FUNCTIONALITIES
        //COUNTER ACTIVATION
            $(".count").counterUp({
                delay: 10,
                time: 1000
            });
        
    //QUICKSAND INIT
        //$('#portfolioWrapper').filterizr();
    
    //BLOG ITEM FUNCTIONAITY
        $('.blog-item-slider').slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              dots: false,
              fade: false,
              autoplay: true,
        });
    
    //AOS INIT
        AOS.init();
    
    //SIDEBAR BLOG FUNCTIONALITIES
    
    
    //COMMON FUNCTIONALITIES
    
    
    
    
    
    
});