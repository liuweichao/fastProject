 define(['fancybox','vue','text!components/jquery.fancybox/jquery.fancybox.tpl','css!plugin/jquery.fancybox/jquery.fancybox.css'], function(Swiper,Vue,template) {
  // Vue.config.devtools = true
  Vue.component('fancybox', {
    template: template,
    props: ['items'],
    data: function () {
      return { msg: 'hello13123' }
    }
  })

  Vue.nextTick(function () {
    $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.png'],a[href$='.gif']").attr('rel', 'gallery').fancybox();
  })

 });