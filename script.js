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

