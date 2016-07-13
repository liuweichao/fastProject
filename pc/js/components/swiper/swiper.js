 define(['swiper','vue','text!components/swiper/swiper.tpl','common', 'css!plugin/swiper/swiper.css'], function(Swiper,Vue,template,common) {
  // Vue.config.devtools = true
  var component = Vue.component('swiper', {
    template: template,
    props: ['items'],
    data: function () {
      return { msg: 'hello13123' }
    },
    compiled: function(){
      var mySwiper = new Swiper ('.vueSwiper', {
        direction: 'horizontal',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable: true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
      })
    }
  })
 });