var timesTamp = "1";
var require = {
    baseUrl: 'js',
    shim: {
        swiper: ['jquery'],
        lazyload: ['jquery'],
        fancybox: ['jquery','mousewheel']
    },
    paths: {
        jquery:[ 'jquery'],
        vue:['plugins/vue/vue.min'],
        swiper:['plugins/swiper/swiper.jquery.min'],
        moment:['plugins/moment.min'],
        lazyload:['plugins/jquery.lazyload/jquery.lazyload'],
        fancybox:['plugins/jquery.fancybox/jquery.fancybox'],
        mousewheel:['jquery.mousewheel'],
        common:['common'],
        Validator:'plugins/Validator/Validator'
    },
    //urlArgs: "v=" + (new Date()).getTime()
    urlArgs: "v="+ timesTamp
};