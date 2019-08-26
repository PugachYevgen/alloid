jQuery(document).ready(function($) {
    $("#fullpage").fullpage({
        // sectionsColor:['#C63D0F','#1BBC9B','#7E8F7C'],
        anchors:['firstPage','secondPage','3rdPage','4rdPage','5rdPage'],
        menu:'#menu',
        scrollBar:false,
        navigation:true,
        navigationPosition: 'right',
        navigationTooltips:['Головна','Чому ми?','Гарантія','Напрямки','Про нас','Компанії які нам довіряють'],
        slidesNavigation:false,
        scrollOverflow: true,
        afterLoad: function(destination, origin){
            var loadedSection = this;

            //использование индекса
            if(origin.index == 0){
                $('#fp-nav ul li a span,'+'.fp-slidesNav ul li a span').css({'background':'url("../img/menu-wrench.png")'});
                $('#fp-nav ul li a.active span,'+'.fp-slidesNav ul li a.active span').css({'background':'url("../img/menu-wrench-active.png")'});

            }
            if(origin.index == 1){
                $('#fp-nav ul li a span,'+'.fp-slidesNav ul li a span').css({'background':'url("../img/menu-wrench-white.png")'});
                $('#fp-nav ul li a.active span,'+'.fp-slidesNav ul li a.active span').css({'background':'url("../img/menu-wrench-active.png")'});
            }
            if(origin.index == 2){
                $('#fp-nav ul li a span,'+'.fp-slidesNav ul li a span').css({'background':'url("../img/menu-wrench-white.png")'});
                $('#fp-nav ul li a.active span,'+'.fp-slidesNav ul li a.active span').css({'background':'url("../img/menu-wrench-active.png")'});
                $('#section2 h1').css({'opacity':'1'})
            }
            if(origin.index == 3){
                $('#fp-nav ul li a span,'+'.fp-slidesNav ul li a span').css({'background':'url("../img/menu-wrench-white.png")'});
                $('#fp-nav ul li a.active span,'+'.fp-slidesNav ul li a.active span').css({'background':'url("../img/menu-wrench-active.png")'});
                $('#section3 h1').css({'opacity':'1'})
            }
            if(origin.index == 4){
                $('#fp-nav ul li a span,'+'.fp-slidesNav ul li a span').css({'background':'url("../img/menu-wrench-white.png")'});
                $('#fp-nav ul li a.active span,'+'.fp-slidesNav ul li a.active span').css({'background':'url("../img/menu-wrench-active.png")'});
                $('#section4 h1').css({'opacity':'1'})
            }
            if(origin.index == 5){
                $('#fp-nav ul li a span,'+'.fp-slidesNav ul li a span').css({'background':'url("../img/menu-wrench.png")'});
                $('#fp-nav ul li a.active span,'+'.fp-slidesNav ul li a.active span').css({'background':'url("../img/menu-wrench-active.png")'});
                $('.partners h1').css({'opacity':'1'})
            }


        },
        afterRender: function(){
            $("#section0 h1").css({'opacity':'1'});
        }
    });

})
