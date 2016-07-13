<div>
	<input v-model="msg">
	<div>{{ msg }}</div>
	<div class="swiper-container vueSwiper">
	    <div class="swiper-wrapper">
	        <div class="swiper-slide" v-for="item in items">{{ item }}</div>
	    </div>
	    <!-- 如果需要分页器 -->
	    <div class="swiper-pagination"></div>
	    <!-- 如果需要导航按钮 -->
	    <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div>
	    <!-- 如果需要滚动条 -->
	    <div class="swiper-scrollbar"></div>
	</div>
</div>