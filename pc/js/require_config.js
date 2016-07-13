var timesTamp = "1";
var require = {
    baseUrl: 'js',
    shim: {
        lazyload: ['jquery'],
        jqUi: ['jquery'],
        swiper:['jquery'],
        mousewheel:['jquery'],
        fancybox: ['mousewheel']
    },
    map: {
        '*': {
            'css': 'requirejs/css', // or whatever the path to require-css is,
            'text': 'requirejs/text'
          }
    },
    paths: {
        plugin: 'plugin',
        src: 'src',
        components: 'components',
        swiper: ['plugin/swiper/swiper.jquery.min'],
        mousewheel: ['plugin/jquery.mousewheel'],
        fancybox: ['plugin/jquery.fancybox/jquery.fancybox'],
        jquery: ['plugin/jquery'],
        lazyload: ['plugin/jquery.lazyload/jquery.lazyload'],
        jqUi: ['plugin/jqUi/jquery-ui'],
        modal: ['plugin/modal/modal'],
        vue: ['plugin/vue'],
        common: ['common']
    },
    //urlArgs: "v=" + (new Date()).getTime()
    urlArgs: "v="+ timesTamp
};