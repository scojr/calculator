// script.js
let userInput = "";
let firstNumber = "";
let secondNumber = "";
let userOperation = "";

const operators = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
}

const numButtons = buttons.querySelectorAll(".numButton");
const operationButtons = buttons.querySelectorAll(".operationButton");
const equalsButton = buttons.querySelector("#equalsButton");
const clearButton = buttons.querySelector("#clearButton");

numButtons.forEach(item => {
  item.addEventListener("click", () => display.textContent = userInput += (item.textContent));
});

operationButtons.forEach(item => {
  item.addEventListener("click", () => {
    firstNumber = userInput;
    userInput = "";
    display.textContent = "00000"
    userOperation = (item.textContent);
  })
});

equalsButton.addEventListener("click", () => {
  if (firstNumber) {
    secondNumber = userInput;
    display.textContent = (operate(parseInt(firstNumber), userOperation, parseInt(secondNumber)))
  }
});

clearButton.addEventListener("click", () => {
  userInput = "";
  firstNumber = "";
  secondNumber = "";
  userOperation = "";
  display.textContent = "00000"
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