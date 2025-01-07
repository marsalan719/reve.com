// Array of users (example)
const users = [
  { email: "arsalan@gmail.com", password: "arsalan123" },
  { email: "user2@example.com", password: "securepass" },
  { email: "admin@example.com", password: "admin123" },
];

// Helper function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Login form validation
document.getElementById("loginForm").onsubmit = function (e) {
  e.preventDefault(); // Prevent form submission

  // Get user inputs
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  // Check credentials
  const user = users.find(
    (u) => u.email === emailInput && u.password === passwordInput
  );

  if (user) {
    // Successful login - set cookie
    setCookie("userEmail", user.email, 1); // 1-day expiration
    window.location.href = "../pages/home.html"; // Redirect to home page
  } else {
    // Show error message
    errorMessage.style.display = "block";
  }
};
