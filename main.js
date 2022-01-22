"use strict";

//make navbar wheen it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 메뉴버튼을 눌렀을때 그 해당메뉴로 이동하는 기능

const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener("click", () => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }

  scrollIntoView(link);
});

// 홈에서 contact me라는 버튼을 눌렀을때 맨아래 contact 부분으로 이동하는 기능

const homecontactBtn = document.querySelector(".home__contact");
homecontactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});



//home chagning outcolor when scrolling

const home = document.querySelector(".home__container")
const homeheight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1-window.scrollY / (homeheight+120)
});





function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

