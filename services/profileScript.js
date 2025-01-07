document.addEventListener("DOMContentLoaded", function () {
  const user = {
    fullName: "John Doe",
    email: "johndoe@example.com",
    phoneNumber: "+92 1234567890",
  };

  // Populate input fields with user data
  document.getElementById("fullName").value = user.fullName;
  document.getElementById("email").value = user.email;
  document.getElementById("phoneNumber").value = user.phoneNumber;

  // Track changes and show the Save button
  const inputs = document.querySelectorAll(".profileData input");
  let saveButton = null;

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      if (!saveButton) {
        saveButton = document.createElement("button");
        saveButton.textContent = "Save Changes";
        saveButton.classList.add("save-btn");
        saveButton.addEventListener("click", saveChanges);
        document.querySelector(".profileData").appendChild(saveButton);
      }
    });
  });

  // Save changes
  function saveChanges() {
    user.fullName = document.getElementById("fullName").value;
    user.email = document.getElementById("email").value;
    user.phoneNumber = document.getElementById("phoneNumber").value;

    alert("Profile updated successfully!");
    saveButton.remove();
    saveButton = null;
  }
});
