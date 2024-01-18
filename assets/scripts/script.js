"use strict";

document.querySelector(".main-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".form-submit").blur();
});
