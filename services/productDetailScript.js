// Fetch URL parameters
const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("name");
const productPrice = urlParams.get("price");
const productImage = urlParams.get("image");
const productCategory = urlParams.get("category");

// Update the product detail page dynamically
document.querySelector(".product-title").innerText = productName;
document.querySelector(".product-price").innerText = productPrice;
document.querySelector(".main-image").src = productImage;
document.querySelector(
  ".product-description"
).innerText = `This ${productCategory} is high quality and designed to meet your needs.`;

// Optional - Update thumbnails if needed
const thumbnails = document.querySelectorAll(".thumbnail");
thumbnails.forEach((thumb) => {
  thumb.src = productImage;
});
