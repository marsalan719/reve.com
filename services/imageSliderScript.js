let currentIndex = 0;
const slidesContainer = document.getElementById("slidesContainer");
const totalSlides = () => document.querySelectorAll(".slides img").length;

// Move to the next slide
function nextSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides()) {
    currentIndex = 0;
  }
  updateSlide();
}

// Move to the previous slide
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalSlides() - 1;
  }
  updateSlide();
}

// Update slide position
function updateSlide() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(nextSlide, 5000);
