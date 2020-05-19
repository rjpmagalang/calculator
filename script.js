const nums = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const plusMinus = document.querySelector(".plusMinus");
const inputText = document.querySelector(".input-text");
let operatorCount = 1;
let firstNum = "";

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function operate(a, b, operator) {
    let prevNum = parseFloat(a);
    let currNum = parseFloat(b);
    let result = "";

    switch (operator) {
        case "+":
            result = add(prevNum, currNum);
            break;
        case "-":
            result = subtract(prevNum, currNum);
            break;
        case "x":
            result = multiply(prevNum, currNum);
            break;
        case "÷":
            result = divide(prevNum, currNum);
            break;
        default:
            break;
    }
    return result;
}

function addNum(num) {
    firstNum = num;
    console.log(firstNum);
    
}

function addOperation(operation) {
    operator = operation;
}

addNum();

function calculate() {
         nums.forEach(div => {
            div.addEventListener("click", (event) => {
                inputText.value += event.target.textContent;
                addNum(inputText.value);
                operatorCount = 0;     
            })    
        });

         operators.forEach(div => {
             div.addEventListener("click", (event) => {
                if(operatorCount === 0){
                    inputText.value += event.target.textContent;
                    ++operatorCount;
                }
             })
         })
}

calculate();

equals.addEventListener("click", () => {
    inputText.value = eval(inputText.value);
})

del.addEventListener("click", () => {

})

clear.addEventListener("click", () => {
    inputText.value = "";
    operatorCount = 1;
});