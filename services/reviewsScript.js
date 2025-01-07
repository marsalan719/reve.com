let reviews = [
  { productId: 1, rating: 5, text: "Great product!" },
  { productId: 1, rating: 4, text: "Good but could be improved." },
  { productId: 2, rating: 5, text: "Exceeded my expectations!" },
  { productId: 1, rating: 3, text: "Average product." },
  { productId: 2, rating: 5, text: "Highly recommend!" },
];

function updateReviews(productid) {
  reviews = reviews.filter((review) => review.productId == productid);
  console.log(reviews);
  const reviewList = document.getElementById("review-list");
  const reviewCount = document.getElementById("review-count");
  const totalReviews = document.getElementById("total-reviews");
  const averageRating = document.getElementById("average-rating");
  const starDisplay = document.getElementById("star-display");
  const starDisplayTop = document.getElementById("star-display-top");

  let ratingCounts = [0, 0, 0, 0, 0];
  let totalRating = 0;

  reviewList.innerHTML = "";

  reviews.forEach((review) => {
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");
    reviewItem.innerHTML = `<strong>${review.rating} &#9733;</strong> - ${review.text}`;
    reviewList.appendChild(reviewItem);

    ratingCounts[5 - review.rating]++;
    totalRating += review.rating;
  });

  const average = (totalRating / reviews.length).toFixed(1);
  averageRating.innerText = average;
  totalReviews.innerText = reviews.length;
  reviewCount.innerText = reviews.length;

  // Update rating bars and counts
  const ratingRows = document.querySelectorAll(".rating-row");
  ratingRows.forEach((row) => {
    const starCount = parseInt(row.getAttribute("data-stars"));
    const count = ratingCounts[5 - starCount];
    const percentage = (count / reviews.length) * 100;
    row.querySelector(".fill").style.width = `${percentage}%`;
    row.querySelector(".count").innerText = count;
  });

  // Update star display
  let filledStars = Math.floor(average);
  let halfStar = average - filledStars >= 0.5 ? 1 : 0;

  let starHTML = "";
  for (let i = 0; i < 5; i++) {
    if (i < filledStars) {
      starHTML += "&#9733;";
    } else if (halfStar) {
      starHTML += "&#9733;";
      halfStar = 0;
    } else {
      starHTML += "&#9734;";
    }
  }

  starDisplay.innerHTML = starHTML;
  starDisplayTop.innerHTML = starHTML;
}

function getProductIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("productId");
}
const productid = getProductIdFromURL();
console.log(productid);
if (productid) {
  updateReviews(productid);
} else {
  document.getElementById("review-list").innerHTML =
    "<p>No product selected.</p>";
}
