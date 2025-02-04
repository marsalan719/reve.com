function displayProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = ""; // Clear existing content

  products.forEach((product) => {
    const productCard = `
            <div class="product-cards">
            <a href="./product.html?name=${encodeURIComponent(
              product.name
            )}&price=${encodeURIComponent(
      product.price
    )}&image=${encodeURIComponent(product.image)}&category=${encodeURIComponent(
      product.category
    )}&productId=${encodeURIComponent(product.productId)}" class="product">
         <div>
          <div><img src=${product.image} alt=""></div>
         <div class="name-price"><div><h2>${product.name}</h2></div><div><p>Rs${
      product.price
    }</p></div></div>
         <div class="description"><p>cool watch for men</p></div>
         
         <div class="add-to-cart"><p>Add to Cart</p></div>
         </div></a>

      </div>
        `;
    container.innerHTML += productCard;
  });
}

// Simulate add to cart action
function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

// Simulate buy now action
function buyNow(productName) {
  alert(`Proceeding to buy ${productName}!`);
}

// Display products on page load
window.addEventListener("load", displayProducts);

const categoryContainer = document.getElementById("categories");

// Render categories dynamically
categories.forEach((category) => {
  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category-item");
  categoryDiv.innerHTML = `
    <img src="${category.image}" alt="${category.name}" class="category-image">
    <div class="category-name">${category.name}</div>
  `;

  // Redirect to products page with category as query param
  categoryDiv.addEventListener("click", () => {
    window.location.href = `../pages/productsList.html?category=${category.name}&pageName=${category.name}`;
  });

  categoryContainer.appendChild(categoryDiv);
});
