$(document).ready(function(){   
// 首页used中的图片轮播    
		var swiper = new Swiper('.used .swiper-container', {
            pagination: '.used .swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides:false,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 50,
                modifier: 1,
                slideShadows : true
            }
        });
//首页属具中的图片滑动
        var s = new Swiper('.toolshow .swiper-container', {
            pagination: '.toolshow .swiper-pagination',
            nextButton: '.toolshow .swiper-button-next',
            prevButton: '.toolshow .swiper-button-prev',
            paginationClickable: true,
            spaceBetween: 30,
            centeredSlides:false,
            autoplay: 2000, 
            autoplayDisableOnInteraction: true 
        })
//三一挖掘机 中的第一个滑动
        var a = new Swiper('.sbanner .swiper-container', {
            // pagination: '.sbanner .swiper-pagination',
            nextButton: '.toolshow .swiper-button-next',
            prevButton: '.toolshow .swiper-button-prev',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides:false,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 0,
                autoplay:2000,
                stretch: 0,
                depth: 0,
                modifier:0,
                slideShadows : false
            }
        });
  });


 