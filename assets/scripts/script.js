"use strict";

document.querySelector(".main-form").addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailRegex.test(emailElement.value))
    window.location.href = "../success.html?text=" + emailElement.value;
});
const emailElement = document.querySelector(".main-form-input-email");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const errorElement = document.querySelector(".email-error");
document
  .querySelector(".main-form-input-email")
  .addEventListener("keyup", function () {
    if (emailRegex.test(emailElement.value)) {
      errorElement.style.display = "none";
    } else {
      errorElement.style.display = "inline";
    }
  });
