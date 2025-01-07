// Function to get cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Update the menu dynamically
window.addEventListener("load", function () {
  const userEmail = getCookie("userEmail");
  const menu = document.querySelector(".menupoints");

  if (userEmail) {
    // Update existing login link to "Profile"
    const loginLink = menu.querySelector("li a");
    loginLink.textContent = "Profile";
    loginLink.href = "../pages/profile.html";

    // Create "Order List" link
    const orderListItem = document.createElement("li");
    const orderListLink = document.createElement("a");
    orderListLink.textContent = "Order List";
    orderListLink.href = "../pages/orderList.html";
    orderListItem.appendChild(orderListLink);

    // Create "Logout" link
    const logoutListItem = document.createElement("li");
    const logoutLink = document.createElement("a");
    logoutLink.textContent = "Logout";
    logoutLink.href = "#";
    logoutLink.addEventListener("click", function () {
      // Clear cookies or session and redirect to login
      document.cookie =
        "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      window.location.href = "../pages/login.html";
    });
    logoutListItem.appendChild(logoutLink);

    // Append new items to the menu
    menu.appendChild(orderListItem);
    menu.appendChild(logoutListItem);
  }
});
