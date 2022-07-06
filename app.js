let displayString = "";
let firstNumber = "";
let operator = "";
let secondNumber = "";

let display = document.querySelector(".displayH1");

let numberButtons = document.querySelectorAll(".num");
numberButtons.forEach(button => button.addEventListener('click', () => numberPress(button.textContent)));

let operatorButtons = document.querySelectorAll(".ops");
operatorButtons.forEach(button => button.addEventListener('click', () => operatorPress(button.innerText)));

let equals = document.querySelector(".equals");
equals.addEventListener('click', equalsPress);

let clear = document.querySelector(".clear");
clear.addEventListener('click', clearPress);


function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

function operate(operator, x, y){
    x = Number(x);
    y = Number(y);
    switch(operator){
        case "+":
            return add(x, y);
            break;
        case "-":
            return subtract(x, y);
            break;
        case "*":
            return multiply(x,y);
            break;
        case "/":
            return divide(x,y);
            break;
        default:
            return add(x,y);
    }
}

function numberPress(button){
    displayString += button;
    display.textContent = displayString;
}

function operatorPress(button){
    operator = button;
    firstNumber = display.innerText;
    if(firstNumber === ""){
        firstNumber = 0;
    }
    displayString = firstNumber +" "+ operator +" ";
    display.textContent = displayString;
}

function equalsPress(){
    let sliceIndex = displayString.split("").indexOf(" ", 2);
    secondNumber = displayString.split("").slice(sliceIndex + 1).join("");
    let result = operate(operator, firstNumber, secondNumber);
    displayString += " = " + result;
    display.textContent = displayString;
}

function clearPress(){
    displayString = "";
    firstNumber = "";
    operator = "";
    secondNumber = "";
    display.innerText = displayString;
}
