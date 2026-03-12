"use strict";

const navbarOpenBtn = document.querySelector(".nav-open-btn");
const navbarCloseBtn = document.querySelector(".nav-close-btn");
const overlay = document.querySelector(".overlay");
const navbar = document.querySelector(".navbar");

const openNavbar = function () {
  navbar.classList.add("active");
  overlay.classList.add("active");
};

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

navbarOpenBtn.addEventListener("click", openNavbar);
navbarCloseBtn.addEventListener("click", closeNavbar);
overlay.addEventListener("click", closeNavbar);
