import "./styles/index.scss";
import $ from "jquery";
// import 'bootstrap';

$(".block").html("jQuery is working");


import "./styles/index.scss";

const userStack = {
  language: "JavaScript",
  framework: "Angular",
};

const user = {
  name: "Kiryl",
  age: "37",
  ...userStack,
};
console.log(user);

// Click to copy
// const bonus_buttons = document.querySelectorAll('.example-table__copy');
// if (bonus_buttons) {
//     [...bonus_buttons].forEach((elem) => {
//         elem.addEventListener('click', function (evt) {
//             const valueBtn = elem.querySelector('.example-table__copy-content');
//             console.log(evt.target);
//             if (evt.target === valueBtn) {
//                 if (navigator.clipboard) {
//                     console.log('1');
//                     console.log(navigator.clipboard);
//                     console.log('2');
//                     return navigator.clipboard.writeText(valueBtn.innerText).then(r => console.log('Copied'));
//                 } else {
//                     let textArea = document.createElement("textarea");
//                     textArea.value = valueBtn.innerText;
//                     document.body.appendChild(textArea);
//                     return new Promise((res, rej) => {
//                         document.execCommand('copy') ? res() : rej();
//                         textArea.remove();
//                         console.log('Copied textarea');
//                         // console.log(navigator.clipboard);
//                     });
//                 }
//             }
//         });
//     });
// }

// Найти все section с h2 вверху
// let isSection = document.querySelectorAll(".section-heading");
// [...isSection].forEach((e, i) => {
//     console.log(i);
//     let isHeadingSection = e.querySelector("h2:first-child");
//     let isHeadingDiv = e.querySelector("section div h2");
//     console.log(isHeadingSection);
//     if (isHeadingSection === null || isHeadingSection == "" || isHeadingDiv) {
//         let headingTitle = document.createElement('h2');
//         headingTitle.className = "title";
//         headingTitle.textContent = "heading section";
//         e.prepend(headingTitle);
//         headingTitle.style.position = "absolute";
//         headingTitle.style.clip = "rect(1px, 1px, 1px, 1px)";
//         headingTitle.style.clipPath = "inset(0px 0px 99.9% 99.9%)";
//         headingTitle.style.overflow = "hidden";
//         headingTitle.style.height = "1px";
//         headingTitle.style.width = "1px";
//         headingTitle.style.padding = 0;
//         headingTitle.style.margin = 0;
//         headingTitle.style.border = 0;
//     }
// })
