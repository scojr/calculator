// script.js
let userInput = "";
let firstNumber = "";
let secondNumber = "";
let userOperation = "";
let displayContent = "";

let resultHistory = [];

const operators = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "÷": divide,
}

const numButtons = buttons.querySelectorAll(".numButton");
const operationButtons = buttons.querySelectorAll(".operationButton");
const equalsButton = buttons.querySelector("#equalsButton");
const clearButton = buttons.querySelector("#clearButton");

numButtons.forEach(item => {
  item.addEventListener("click", () => updateDisplay(userInput += (item.textContent)));
});

operationButtons.forEach(item => {
  item.addEventListener("click", () => {
    firstNumber = userInput;
    userInput = "";
    updateDisplay(">")
    userOperation = (item.textContent);
  })
});

equalsButton.addEventListener("click", () => {
  if (userOperation && userInput) {
    secondNumber = userInput;
    display.textContent = (operate(parseInt(firstNumber), userOperation, parseInt(secondNumber)))
  }
  userOperation = "";
});

clearButton.addEventListener("click", () => {
  userInput = "";
  firstNumber = "";
  secondNumber = "";
  userOperation = "";
  updateDisplay(">")
});

function updateDisplay(content) {
  displayContent = content;
  display.textContent = displayContent;
}

function operate(firstN, oper, secondN) {
  const result = parseInt(operators[oper](firstN, secondN));
  resultHistory.unshift(result);
  userInput = result;
  return result;
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