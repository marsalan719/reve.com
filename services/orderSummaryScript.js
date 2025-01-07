const buttons = document.querySelectorAll(".payment-methods button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});
