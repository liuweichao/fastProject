
define(['jquery','lazyload'], function ($,lazyload) {

    //懒加载
    if(($.lazyload||$.fn.lazyload) != null){
        $('img').lazyload({
            placeholder:'img/loading.gif',
            threshold: 100,
            effect: "fadeIn",
            data_attribute  : "src"

        });
    }

    //图片预览
    // if($.fn.fancybox != null){
    //     $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
    // }

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

    // 验证
    // var validatorFunc = function(){
    //     var validator = new Validator();
    //
    //     var $required = $('[required]');
    //
    //     $required.each(function (index, ele) {
    //         validator.add(ele,[{
    //             strategy:'isNonEmpty',
    //             errorMsg:ele.placeholder
    //         }]);
    //     });
    //
    //
    //     var errorMsg = validator.start();
    //     return errorMsg;
    // };
    //
    //
    // return {
    //
    // }

});
