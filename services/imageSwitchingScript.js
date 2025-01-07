const thumbnails = document.querySelectorAll(".thumbnail");
const mainImage = document.querySelector(".main-image");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", function () {
    mainImage.src = this.src;
  });
});

const starsContainer = document.querySelector(".stars");
const rating = parseFloat(2);
const ratingText = document.querySelector(".rating-text");
const stars = starsContainer.querySelectorAll(".star");

stars.forEach((star, index) => {
  if (rating >= index + 1) {
    star.classList.remove("empty");
  } else if (rating > index && rating < index + 1) {
    star.innerHTML = "&#9733;"; // Full star for partial rating
    star.style.width = `${(rating - index) * 100}%`; // Partially fill the star
  } else {
    star.classList.add("empty");
  }
});
ratingText.innerText = `${rating.toFixed(1)} out of 5`;
