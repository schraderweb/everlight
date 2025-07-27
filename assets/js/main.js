document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('year').textContent = new Date().getFullYear();

var swiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 2,
  spaceBetween: 32,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: { slidesPerView: 1, spaceBetween: 10 },
    992: { slidesPerView: 2, spaceBetween: 32 }
  }
});

document.getElementById('openVideoModal').onclick = function() {
  var modal = document.getElementById('ipcModalOverlay');
  var iframe = document.getElementById('youtubeVideo');
  // YouTube video URL:
  iframe.src = "https://www.youtube.com/embed/HbGNUB1d1tQ?autoplay=1";
  modal.classList.add('active');
};
document.getElementById('closeVideoModal').onclick = function() {
  var modal = document.getElementById('ipcModalOverlay');
  var iframe = document.getElementById('youtubeVideo');
  modal.classList.remove('active');
  iframe.src = "";
};
document.getElementById('ipcModalOverlay').onclick = function(e) {
  if(e.target === this) {
    this.classList.remove('active');
    document.getElementById('youtubeVideo').src = "";
  }
};

