//DOM 트리 생성(body 실행) 후 DOMContentLoaded 함수 처리
window.addEventListener('DOMContentLoaded', function() { 
    createSwiper();
})//window.addEventListener


//Swiper 생성 함수
function createSwiper() {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        // direction: 'vertical',
        autoplay: {delay: 3000},
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    }); //Swiper class
}