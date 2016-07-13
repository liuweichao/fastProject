define(['jquery','lazyload'], function (jquery,lazyload) {

    //懒加载
    if(($.lazyload||$.fn.lazyload) != null){
        $('img').lazyload({
            placeholder:'img/loading.gif',
            threshold: 100,
            effect: "fadeIn",
            data_attribute  : "lazyloadSrc"
        });
    }

    // 返回顶部
    (function(){
        var goTop = $('<div id="goTop"> <span class="icon icon-chevron-up"></span> </div>');
        goTop.appendTo($("body"));

        $(window).scroll(function(ev) {
            if($(window).scrollTop() > 100) {
                goTop.fadeIn();
                $('.nav').addClass('fixedNav');
            } else {
                goTop.fadeOut();
                $('.nav').removeClass('fixedNav');
            }
        });

        goTop.click(function() {
            $("body, html").stop().animate({scrollTop: 0});
        });
    })();


});
