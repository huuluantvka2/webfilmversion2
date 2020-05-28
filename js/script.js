$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[2000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
    $(window).scroll(function () { 
        var position = $('html,body').scrollTop();
        if(position>40){
            $('.slide-img').addClass('scroll-slide');
        }else{
            $('.scroll-slide').removeClass('scroll-slide');
        }
    });
});