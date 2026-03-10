const hamburger = document.querySelector(".hamburger");
const ulList = document.querySelector(".nav-list");

hamburger.addEventListener("click", function () {
  ulList.classList.toggle("show");
});
