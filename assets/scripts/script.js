"use strict";

const emailElement = document.querySelector(".main-form-input-email");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const errorElement = document.querySelector(".email-error");
emailElement.addEventListener("keyup", function () {
  if (emailRegex.test(emailElement.value)) {
    errorElement.style.display = "none";
    if (emailElement.classList.contains("error-input")) {
      emailElement.classList.toggle("error-input");
    }
  } else {
    errorElement.style.display = "inline";
    if (!emailElement.classList.contains("error-input")) {
      emailElement.classList.toggle("error-input");
    }
  }
});
document.querySelector(".main-form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailRegex.test(emailElement.value))
    window.location.href =
      "https://bnfcj.github.io/newsletter-sign-up-with-success-message-main/success.html?text=" +
      emailElement.value;
  else {
    if (!emailElement.classList.contains("error-input")) {
      emailElement.classList.toggle("error-input");
    }
  }
});
