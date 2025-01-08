const productContainer = document.getElementById("productContainer");

// Get category and search query from URL
const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get("category");
const pageName = urlParams.get("pageName");

const searchQuery = urlParams.get("search")
  ? urlParams.get("search").toLowerCase()
  : "";
console.log("", pageName);
// Display products based on category and search query
function displayProducts(categoryName, searchQuery) {
  document.getElementById("heading").innerHTML = pageName;
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
    const fragment = document.createDocumentFragment();
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-cards");
      productCard.innerHTML = `
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
      `;
      fragment.appendChild(productCard);
    });
    productContainer.appendChild(fragment);
  }
  console.log("", filteredProducts);
}

// Display products for the selected category and search query
displayProducts(selectedCategory || "All", searchQuery);

// Dropdown toggle functionality
document.querySelector(".hamburger").addEventListener("click", () => {
  const dropdown = document.getElementById("dropdown-menu");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
});

// Close dropdown if click outside
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("dropdown-menu");
  const menuContainer = document.querySelector(".menu-container");
  if (
    !menuContainer.contains(e.target) &&
    !e.target.classList.contains("hamburger")
  ) {
    dropdown.style.display = "none";
  }
});
