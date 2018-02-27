$(document).ready(function(){
    /* header section starts */
        /* sticky nav */
        var navOffset = $("nav").offset().top;
        $(window).on("scroll", function() {
            var scrollAmount = $(this).scrollTop();
            if( scrollAmount >= navOffset ){
                $("nav").addClass("header nav-fixed");
            }else{
                $("nav").removeClass("header nav-fixed");
            }
        });
    
        //scroll smooth to different sections
        $("#mainNavigation .nav-link").on("click", function(e){
            var navLinkHref = $(this).attr("href");
            var navLinkhrefOffset = $(navLinkHref).offset().top;
            $("html, body").animate({
                scrollTop: navLinkhrefOffset    
            }, 1000);
            $("#mainNavigation .nav-link").removeClass("active");
            $(this).addClass("active");
            e.preventDefault();
        });
    /* header section ends */
    /* initializing the aos library for all sections */   
        AOS.init({
            duration: "1000"
        });
    
    /* banner section starts */
        $('#banner').parallax({
            imageSrc: '../images/banner-01.jpeg'
        });
    /* banner section ends */
    
    /* about section starts */
        /* about img slick fade slider init */
        $(".about-img").slick({
            dots: false,
            arrows: false,
            fade: true,
            speed: 700,
            infinite: true,
            autoplay: true,
        });
    /* about section ends */
    /* special-section starts */
        /* special menu slider */
        $(".special-dishes").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            centerPadding: '0px',
            arrows: true,
            dots: false,
            centerMode: true,
        });
    /* special section ends */
    
    /* dishes starts */
        $(".dish-sidebar ul li a").on("click", function(e){
            var aHref = $(this).attr("href");
            $(".dish-details div").removeClass("d-block");
            $(aHref).fadeIn("slow").addClass("d-block");
            $(".dish-sidebar ul li a").removeClass("dish-tab-active");
            $(this).addClass("dish-tab-active");
            var dishImgId = aHref+"Img";
            console.log(dishImgId);
            $(".dish-img i").removeClass("d-block");
            $(dishImgId).fadeIn().addClass("d-block");
            e.preventDefault();
        });
    /* dishes ends */
    
    /* packages sectiojn starts */
        $(".packages-wrapper").slick({
            dots: false,
            arrows: true,
            prevArrow: "<i class='fa fa-arrow-left'></i>",
            nextArrow: "<i class='fa fa-arrow-right'></i>",
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 500,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                    
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToShow: 1
                    }
                }
            ]
        });
    /* packages section ends */
    
    /* cheefs section starts */
        $(".cheefs-wrapper").slick({
            arrows: true,
            prevArrow: "<i class='fa fa-arrow-left'></i>",
            nextArrow: "<i class='fa fa-arrow-right'></i>",
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            autoplay: true,
            infinite: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                    
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToShow: 1
                    }
                }
            ]
        });
    /* cheefs section ends */
    
    /* banner section starts */
    
    /*testimonial section starts*/
        $(".testimonial-text").slick({
            arrows: true,
            prevArrow: "<i class='fa fa-arrow-left'></i>",
            nextArrow: "<i class='fa fa-arrow-right'></i>",
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: ".testimonial-img",
            cssEase: "linear"
        });
        $(".testimonial-img").slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.testimonial-text',
            dots: false,
            arrows: false,
            centerMode: false,
            focusOnSelect: true 
        });
    /* testimonial section ends */
    
    /* form starts */
        /* opening the home delivery section on click */
        
        
    /* footer parts starts */
        /* pop up the footer .overlay section when scrolled */
        $("footer").waypoint(function(direction){
            if( direction == "down" ){
                $("footer .overlay").addClass("footer overlay-pop");
            }else{
                $("footer .overlay").removeClass("footer overlay-pop");
            }
        },{offset: "10%"});
    
        /* opening and closing time jquery */
        /*var yourTime = new Date();
        var yourHours = yourTime.getHours();
        var yourMinutes = yourTime.getMinutes();
        var currentTime = yourHours+":"+yourMinutes;
        if( currentTime == 1 )*/
        /*console.log("yourTime");*/
    /* footer parts ends */
    
    /*==========================*/
});