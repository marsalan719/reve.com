function searchProducts(event) {
  if (event.key === "Enter") {
    const query = document.getElementById("search").value.trim();
    // const category = selectedCategory || "All";

    // Redirect to productsList with search query
    window.location.href = `productsList.html?search=${encodeURIComponent(
      query
    )}`;
  }
}
