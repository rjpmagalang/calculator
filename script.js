const num = document.querySelectorAll(".num");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const plusMinus = document.querySelector(".plusMinus");
const inputText = document.querySelector(".input-text");

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(num1, num2, operator) {

    num.forEach(div => {
        div.addEventListener("click", (event) => {
            inputText.value = event.target.textContent; 
        })
    });

    clear.addEventListener("click", () => inputText.value = "0");
}

operate();