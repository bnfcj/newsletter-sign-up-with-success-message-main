const urlParams = new URLSearchParams(window.location.search);
const textValue = urlParams.get("text");
if (textValue)
  document.querySelector(
    ".success-message"
  ).textContent = `A confirmation email has been sent to '${textValue}'. Please
open it and click the button inside to confirm your subscription`;
