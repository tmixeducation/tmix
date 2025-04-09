// Tạm thời để trống – bạn có thể thêm các hiệu ứng sau này
console.log("Trang TMIX đã được tải.");

// Tự động chạy slider
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); // chuyển slide mỗi 4 giây
