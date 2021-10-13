var app = new Vue({
    el: '#app',
    data: {

    }
})

var personal = new Swiper(".personal", {
    effect: "flip",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});