"use strict";

// Elements

const header = document.querySelector("header");
const headerToggleBtn = document.querySelector(".header-btn");

// Events

headerToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});
