// script.js

let firstNumber = "";
let secondNumber = "";

const operators = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
}

const numButtons = buttons.querySelectorAll(".numButton");
const operationButtons = buttons.querySelectorAll(".operationButton");


numButtons.forEach(item => {
  item.addEventListener("click", () => display.textContent = firstNumber += (item.textContent));
});

function operate(firstN, oper, secondN) {
  return operators[oper](firstN, secondN);
}
function add(numOne, numTwo) {
  return numOne + numTwo;
}
function subtract(numOne, numTwo) {
  return numOne - numTwo;
}
function multiply(numOne, numTwo) {
  return numOne * numTwo;

}
function divide(numOne, numTwo) {
  return numOne / numTwo;

}