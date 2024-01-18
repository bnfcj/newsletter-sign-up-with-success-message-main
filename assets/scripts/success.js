const urlParams = new URLSearchParams(window.location.search);
const textValue = urlParams.get("text");
if (textValue)
  document.querySelector(
    ".success-message"
  ).innerHTML = `A confirmation email has been sent to <strong>${textValue}</strong>. Please
open it and click the button inside to confirm your subscription`;
const buttonElement = document.querySelector(".success-main button");
buttonElement.addEventListener("click", function () {
  buttonElement.blur();
});
