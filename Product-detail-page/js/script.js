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

// Slider

const slider = document.querySelector(".slider-banner");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let sliderPages = 0;

const totalSlideItems = 4;

const slideToNext = function () {
  sliderPages++;
  slider.style.transform = `translateX(-${sliderPages}00%)`;
  sliderEnd();
};

nextBtn.addEventListener("click", slideToNext);

const slideToPrev = function () {
  sliderPages--;
  slider.style.transform = `translateX(-${sliderPages}00%)`;
  sliderEnd();
};

prevBtn.addEventListener("click", slideToPrev);

function sliderEnd() {
  nextBtn.classList.toggle("disabled", sliderPages >= totalSlideItems - 1);
  prevBtn.classList.toggle("disabled", sliderPages <= 0);
}

sliderEnd();

const totalPrice = document.querySelector(".price");
const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");
const qty = document.querySelector(".qty");

let quantity = 1;
let totalPriceEle = 125;
let productPrice = 125;

const increaseProductQty = function () {
  quantity++;
  totalPriceEle = quantity * productPrice;
  qty.textContent = quantity;
  totalPrice.textContent = `$${totalPriceEle}.00`;
};

plusBtn.addEventListener("click", increaseProductQty);

const decreaseProductQty = function () {
  if (quantity > 1) quantity--;
  totalPriceEle = quantity * productPrice;
  qty.textContent = quantity;
  totalPrice.textContent = `$${totalPriceEle}.00`;
};

minusBtn.addEventListener("click", decreaseProductQty);
