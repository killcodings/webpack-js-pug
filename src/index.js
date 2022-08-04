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


const bonus_buttons = document.querySelectorAll('.example-table__copy');
if (bonus_buttons) {
    [...bonus_buttons].forEach((elem) => {
        elem.addEventListener('click', function (evt) {
            const valueBtn = elem.querySelector('.example-table__copy-content');
            console.log(evt.target);
            if (evt.target === valueBtn) {
                if (navigator.clipboard) {
                    console.log('1');
                    console.log(navigator.clipboard);
                    console.log('2');
                    return navigator.clipboard.writeText(valueBtn.innerText).then(r => console.log('Copied'));
                } else {
                    let textArea = document.createElement("textarea");
                    textArea.value = valueBtn.innerText;
                    document.body.appendChild(textArea);
                    return new Promise((res, rej) => {
                        document.execCommand('copy') ? res() : rej();
                        textArea.remove();
                        console.log('Copied textarea');
                        // console.log(navigator.clipboard);
                    });
                }
            }
        });
    });
}



