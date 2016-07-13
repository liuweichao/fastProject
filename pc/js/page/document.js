 require(['vue','modal','common','components/swiper/swiper','components/jquery.fancybox/jquery.fancybox'], function(Vue,modal,common,swiper) {
  var parent = new Vue({
    el: '#app',
    init: function(){
      console.log('init');
    },
    data: {
      message: [1,'sdfasdfads',3,4]
    }
  })

  var modal = new modal();
  modal.alert({
    title: 'alert'
  });
  var child = new Vue({
    el: '#app2',
    data: {
      message: ['child'],
      message2: [{
        title: 'liu1',
        img: 'http://css88.b0.upaiyun.com/css88/2016/03/CSS88-250X120.jpg'
      },{
        title: 'liu2',
        img: 'http://css88.b0.upaiyun.com/css88/2016/03/CSS88-250X120.jpg'
      }]
    }
  })


 });