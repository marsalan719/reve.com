var animation = lottie.loadAnimation({
  container: document.getElementById("lottie-animation"),
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "../animations/animation.json", // Replace with your animation path
});

// Show the "Done" button when the animation ends
animation.addEventListener("complete", function () {
  document.getElementById("doneButton").style.display = "block";

  // Add event listener for the clickable "Done" button in the SVG
  const doneButtonSVG = document.querySelector(
    'g[transform="matrix(1,0,0,1,0,0.260009765625)"] path'
  );

  if (doneButtonSVG) {
    doneButtonSVG.style.cursor = "pointer";
    doneButtonSVG.addEventListener("click", function () {
      // Action when the button is clicked
      // alert("Order confirmed! Thank you.");
      window.location.href = "../pages/home.html"; // Redirect to another page or perform an action
    });
  }
});
