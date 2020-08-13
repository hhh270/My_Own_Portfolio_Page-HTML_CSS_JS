"use strict";

// Make navbar hide/hover
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  // arrow function 활용 스크롤이 실행될 때, 등록한 함수를 호출
  //   console.log(window.scrollY);
  //   console.log(`navbarHeight: ${navbarHeight}`);
  // result : 67.38

  if (window.scrollY + 60 > navbarHeight) {
    navbar.classList.add(`navbar__dark`);
  } else {
    navbar.classList.remove(`navbar__dark`);
  }
  //   후 navbar--dark에 대한 스타일링을 css에서 진행
});
