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

//home padeing when scrolling

const home = document.querySelector(".home__container");
const homeheight = home.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / (homeheight + 120);
});

// 스코롤을 내릴때 Arrow-up  아이콘 나오게 하기
// Show Arrow-up icon when scrolling down
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeheight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Arrow up 아이콘 클릭시 홈 맨위로 가게 만들기
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// 선택한 아이디 위치로 이동하기
// move to id when click
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
