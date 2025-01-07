const productContainer = document.getElementById("productContainer");

// Get category and search query from URL
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");
const searchQuery = urlParams.get("search")
  ? urlParams.get("search").toLowerCase()
  : "";
console.log("", searchQuery);
// Display products based on category and search query
function displayProducts(categoryName, searchQuery) {
  productContainer.innerHTML = ""; // Clear previous products

  let filteredProducts = products;

  // Filter by category if not "All"
  if (categoryName && categoryName !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === categoryName
    );
  }

  // Apply search filter if query exists
  if (searchQuery) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
  }

  // Display filtered products
  if (filteredProducts.length === 0) {
    productContainer.innerHTML = "<p>No products found</p>";
  } else {
    filteredProducts.forEach((product) => {
      const productCard = `
      <div class="product-cards">
        <a href="./product.html?name=${encodeURIComponent(
          product.name
        )}&price=${encodeURIComponent(
        product.price
      )}&image=${encodeURIComponent(
        product.image
      )}&category=${encodeURIComponent(
        product.category
      )}&productId=${encodeURIComponent(product.productId)}" class="product">
          <div>
            <div><img src=${product.image} alt=""></div>
            <div class="name-price">
              <div><h2>${product.name}</h2></div>
              <div><p>Rs${product.price}</p></div>
            </div>
            <div class="description"><p>Cool ${
              product.category
            } for men</p></div>
            <div class="add-to-cart"><p>Add to Cart</p></div>
          </div>
        </a>
      </div>
      `;
      productContainer.innerHTML += productCard;
    });
  }
}

// Display products for the selected category and search query
displayProducts(selectedCategory || "All", searchQuery);
