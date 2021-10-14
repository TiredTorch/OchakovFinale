$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__items').toggleClass('active');
    });
    
    $('.room__slider').slick({
        arrows: false,
        autoplay: true,
    });
}); 