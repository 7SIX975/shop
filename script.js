// script.js

// ตอนนี้เราจะยังไม่เขียนโค้ด JavaScript มาก เพียงแค่ให้แน่ใจว่าการรวมไฟล์ทำงานได้
console.log('หน้าเว็บถูกโหลดเรียบร้อยแล้ว');
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); // เปลี่ยนรูปภาพทุกๆ 3 วินาที
}

// ฟังก์ชันสำหรับควบคุมการเปลี่ยนสไลด์
function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) { 
        slideIndex = 1; 
    }
    if (slideIndex < 1) { 
        slideIndex = slides.length; 
    }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";
}

// ฟังก์ชันสำหรับซ่อนและแสดง Header เมื่อเลื่อนหน้า
function handleScroll() {
    const header = document.getElementById('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // ซ่อน header เมื่อลงไปข้างล่าง และแสดง header เมื่อเลื่อนขึ้น
    if (scrollTop > lastScrollTop) {
        header.style.top = "-121px";
    } else {
        header.style.top = "0";
    }
    lastScrollTop = scrollTop;

    // เพิ่มหรือเอา class 'scrolled' ออก เมื่อเลื่อนหน้า
    if (scrollTop > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// เพิ่ม event listener เดียวสำหรับการเลื่อนหน้า
window.addEventListener('scroll', handleScroll);
