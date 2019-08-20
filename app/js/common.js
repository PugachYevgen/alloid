jQuery(document).ready(function($) {
    $("#fullpage").fullpage({
        // sectionsColor:['#C63D0F','#1BBC9B','#7E8F7C'],
        anchors:['firstPage','secondPage','3rdPage','4rdPage','5rdPage'],
        menu:'#menu',
        scrollBar:false,
        //scrollOverflow:true
        navigation:true,
        navigationPosition: 'right',
        navigationTooltips:['Секция 1','Секция 2','Секция 3','Секция 4','Секция 5'],
        slidesNavigation:false,

        //slidesNavPosition:'top'
        // loopTop:false,
        // loopBottom:false,
        // loopHorizontal:false,

        // afterResize:function(link,index) {
        //     alert('Hello');
        // },
        // afterLoad:function(origin) {
        //
        //     if(origin) {
        //         $("#section0 img").delay(300).animate({'left':'0%'},300);
        //         $("#section0 h1").fadeIn(300,function() {
        //                    $("#section0 p").css({'display':'block'}).animate({'fontSize':'8em'},300)
        //                  });
        //     }
        //     if(link == 'firstPage') {
        //         $("#section0 h1").fadeIn(300,function() {
        //             $("#section0 p").css({'display':'block'}).animate({'fontSize':'8em'},300)
        //         });
        //     }
        //
        // },
        afterRender: function(){
            var pluginContainer = this;
            $("#section0 img").delay(300).fadeIn(1300);
            $("#section0 h1").fadeIn(1500,function() {
                $("#section0 p").css({'display':'block'}).animate({'fontSize':'8em'},300)
            });
        }


    });
})