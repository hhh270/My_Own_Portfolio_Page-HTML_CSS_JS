"use strict";

// !Make navbar hide/hover!
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

// !select navbar menu to move!
const navbarMenu = document.querySelector(".navbar__menu");

// 이벤트 listen 여부 확인
// navbarMenu.addEventListener(`click`, () => {
//   console.log("dsf");
// });

navbarMenu.addEventListener(`click`, (event) => {
  //   console.log(event.target);
  //   클릭대상이 콘솔창에 출력

  //   console.log(event.target.dataset.link);
  //   data-link에 기입한 내용을 dataset.link로 출력 가능.

  const link = event.target.dataset.link;
  if (link == null) {
    return;
    // link가 null이라면 아무것도 출력하지 않음.
  } else {
    // console.log(event.target.dataset.link);
    scrollIntoView(link);

    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({ behavior: "smooth" });
    // https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView
  }
});

// !contact me button!
const contactMe = document.querySelector(".home__contact");

contactMe.addEventListener(`click`, () => {
  //   console.log("click!");
  const contactBtn = event.target.dataset.link;
  scrollIntoView(contactBtn);

  //   const scrollTo = document.querySelector(contactBtn);
  //   scrollTo.scrollIntoView({ behavior: "smooth" });
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
