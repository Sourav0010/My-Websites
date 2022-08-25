const responsive ={
    0:{
        items:1
    },
    320:{
        items:1
    },
    570:{
        items:2
    },
    1024:{
        items:3
    }
}

$(document).ready(function(){

    $nav = $('.nav');
    $toggleColapse = $('.toggle-colapse');

    // Click Event On toggle Menu
    $toggleColapse.click(function(){
        $nav.toggleClass('colaspe');
    })

    // Owl-Carsousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay:false,
        autoplayTimeout:3000,
        dots:false,
        nav:true,
        navText:[$('.owl-navigation .owl-nav-previous'),$('.owl-navigation .owl-nav-next')],
        responsive:responsive
    });

    // Scroll Up Function

    $('.move-up span').click(function(){
        $('html, body').animate({
            scrollTop:0    
        },1000);
    })

    // aos inst
    AOS.init();

});