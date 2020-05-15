const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equals = document.querySelector(".equals");

const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const plusMinus = document.querySelector(".plusMinus");

const inputText = document.querySelector(".input-text");

one.addEventListener("click", (e) => inputText.value = "1")
clear.addEventListener("click", (e) => inputText.value = "0")