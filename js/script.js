function ShowPopUp() {
    $('.pop-up').fadeIn(400);
}

$(document).ready(function(){
    setTimeout("$('.pop-up').fadeIn(400)", 1000);

    $('.exit').click(function(event){
        $('.pop-up').fadeOut(400);
    });

    $('.header__burger').click(function(event){
        $('.header__items').toggleClass('active');
    });
    $('.room__slider').slick({
        arrows: false,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
    });
    $('.enviroment__slider').slick({
        arrows: false,
        autoplay: true,
        speed: 800,
        slidesToShow: 3,
        centerMode: true,
        autoplaySpeed: 1000,
        responsive:[
            {
                breakpoint: 768,
                settings:{
                    slidesToShow: 1,
                    speed: 800,
                    arrows: false,
                    autoplay: true,
                    centerMode: true,
                    autoplaySpeed: 1000,
                }
            }
        ]
    });
}); 