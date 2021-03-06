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

// navbar toggle button for small screen
const navbarToggleBtn = document.querySelector(`.navbar__toggle-btn`);
//위에서 정의함 const navbarMenu = document.querySelector(".navbar__menu");
navbarToggleBtn.addEventListener(`click`, () => {
  navbarMenu.classList.toggle(`open`);
  navbarMenu.addEventListener(`click`, () => {
    navbarMenu.classList.remove(`open`);
  });
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

// !Make home's contents fade out.
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //   console.log(`homeHeight: ${homeHeight}`);    663

  // 컨셉) opacity 값을 바로 적용. (1-스크롤px / 홈의 높이)
  //   console.log(1 - window.scrollY / homeHeight); -> opacity의 값.
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// add arrow-up button
const arrowup = document.querySelector(".arrowup");
document.addEventListener("scroll", () => {
  const guage = window.scrollY / homeHeight;
  arrowup.style.opacity = guage;
  if (guage + 0.8 >= 1) {
    arrowup.style.pointerEvents = "auto";
  } else {
    arrowup.style.pointerEvents = "none";
  }
});
arrowup.addEventListener("click", () => {
  scrollIntoView("#home");
});

// My works - projects filtering
// reference : https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes

const workBtnContainer = document.querySelector(`.work__categories`);
const projectContainer = document.querySelector(`.work__projects`);
const projects = document.querySelectorAll(`.project`);
workBtnContainer.addEventListener(`click`, () => {
  const filter =
    event.target.dataset.filter || event.target.parentNode.dataset.filter;
  // category__btn 아래에 있는 span에 적용X(dataset이 미적용) --> parent 값으로 출력.
  // console.log(filter);
  if (filter == null) {
    return;
  }
  // My works category active 추가/제거.
  const active = document.querySelector(`.category__btn.active`);
  active.classList.remove(`active`);
  const addActive =
    event.target.nodeName === `BUTTON` ? event.target : event.target.parentNode;
  addActive.classList.add(`active`);

  projectContainer.classList.add(`anim-out`);
  setTimeout(() => {
    projects.forEach((project) => {
      // forEach((project) {})는 for(let project of projects) {}와 동일함.
      // forEach((project) {})는 for(let i=0; i < projects.length; i++){
      //   project = projects[i];
      // }와도 동일
      // console.log(project.dataset.type); 데이터타입 정상출력 확인.
      if (filter === `*` || filter === project.dataset.type) {
        project.classList.remove(`invisible`);
      } else {
        project.classList.add(`invisible`);
      }
    });
    projectContainer.classList.remove(`anim-out`);
  }, 280);
});

// My works category active 추가/제거(내가 한 방식)
// const workBtnContainer = document.querySelector(`.work__categories`);
// const catBtn = document.querySelectorAll(`.category__btn`);
// workBtnContainer.addEventListener(`click`, () => {
//   const filter =
//     event.target.dataset.filter || event.target.parentNode.dataset.filter;
//   if (filter == null) {
//     return;
//   }
//   catBtn.forEach((category__btn) => {
//     if (filter === category__btn.dataset.filter) {
//       category__btn.classList.add(`active`);
//     } else {
//       category__btn.classList.remove(`active`);
//     }
//   });
// });

// !functions!
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}
