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

document.addEventListener("click", () => {
  console.log(`userInput: ${userInput}`);
  console.log(`firstNumber: ${firstNumber}`);
  console.log(`secondNumber: ${secondNumber}`);
  console.log(`userOperation: ${userOperation}`);
  console.log(`displayContent: ${displayContent}`);
  console.log(`--------------------------------`);
})

const numButtons = buttons.querySelectorAll(".numButton");
const operationButtons = buttons.querySelectorAll(".operationButton");
const equalsButton = buttons.querySelector("#equalsButton");
const clearButton = buttons.querySelector("#clearButton");
const resultHistoryDisplay = document.querySelector("#resultHistoryDisplay");

numButtons.forEach(item => {
  item.addEventListener("click", () => updateDisplay(userInput += (item.textContent)));
});

operationButtons.forEach(item => {
  item.addEventListener("click", () => {
    if (userInput && firstNumber) {
      operate(parseInt(firstNumber), userOperation, parseInt(userInput));
    }
    firstNumber = userInput;
    userInput = "";
    updateDisplay(">")
    userOperation = (item.textContent);
  })
});

equalsButton.addEventListener("click", () => {
  if (userOperation && userInput) {
    secondNumber = userInput;
    operate(parseInt(firstNumber), userOperation, parseInt(secondNumber));
  }
  userOperation = "";
});

clearButton.addEventListener("click", () => {
  userInput = "";
  firstNumber = "";
  secondNumber = "";
  userOperation = "";
  resultHistoryDisplay.textContent = ">";
  updateDisplay(">")
});

function updateDisplay(content) {
  let displayContent = content;
  display.textContent = displayContent;
}

function operate(firstN, oper, secondN) {
  const result = parseInt(operators[oper](firstN, secondN));
  resultHistory.unshift(result);
  resultHistoryDisplay.textContent = result;
  userInput = "";
  firstNumber = "";
  secondNumber = "";
  userOperation = "";
  updateDisplay(">")
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