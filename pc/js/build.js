({
    baseUrl: '.',
    appDir: '.',
    dir: 'release',
    // optimize: 'none',
    shim: {
        swiper:{
            deps: [
                'jquery',
                'css!plugin/swiper/swiper.css'
            ]
        }
    },
    map: {
        '*': {
            'css': 'requirejs/css', // or whatever the path to require-css is,
            'text': 'requirejs/text'
          }
    },
    paths: {
        plugin: 'plugin',
        swiper:'empty:',
        jquery:'empty:',
        common:'empty:',
        vue:'empty:'
    },
    modules: [{
        name: 'page/requireTest'
    }]
})