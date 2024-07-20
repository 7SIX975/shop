const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
        delay: 3000, // เปลี่ยนสไลด์ทุก 3 วินาที
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
AOS.init({
    duration: 1000,
    once: true
});
$(document).ready(function() {
    $("body").overlayScrollbars({
        className: "os-theme-dark",
        resize: "both",
        sizeAutoCapable: true,
        paddingAbsolute: true,
        scrollbars: {
            clickScrolling: true,
            autoHide: "leave",
            autoHideDelay: 100
        }
    });
});

