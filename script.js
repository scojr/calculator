// script.js
let currentNumber = "";
let userOperation = "";
let previousNumber = 0;

const operators = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "÷": divide,
}

document.addEventListener("click", () => {
  console.log(`currentNumber: ${currentNumber}`);
  console.log(`previousNumber: ${previousNumber}`);
  console.log(`userOperation: ${userOperation}`);
  console.log(`--------------------------------`);
})

const numButtons = buttons.querySelectorAll(".numButton");
const decimalButton = buttons.querySelector("#decimalButton")
const operationButtons = buttons.querySelectorAll(".operationButton");
const equalsButton = buttons.querySelector("#equalsButton");
const clearButton = document.querySelector("#clearButton");

numButtons.forEach(item => {
  item.addEventListener("click", () => {
    if (previousNumber && !userOperation) {
      setPreviousNumber();
    }

    if (String(currentNumber).length < 7) setCurrentNumber(currentNumber += (item.textContent));
  });
});

decimalButton.addEventListener("click", () => {
  if (parseFloat(currentNumber) % 1 == 0) setCurrentNumber(currentNumber += decimalButton.textContent, true);
});

operationButtons.forEach(item => {
  item.addEventListener("click", () => {
    if (!previousNumber) setPreviousNumber(currentNumber);
    if (userOperation) {
      operate(previousNumber, userOperation, currentNumber)
      userOperation = (item.textContent);
      document.querySelector("#operationDisplay").textContent = userOperation;
    } else {
      userOperation = (item.textContent);
      document.querySelector("#operationDisplay").textContent = userOperation;
    }
  })
});

equalsButton.addEventListener("click", () => {
  if (userOperation) {
    operate(previousNumber, userOperation, currentNumber)
    setCurrentNumber(0);
  }
  userOperation = "";
  document.querySelector("#operationDisplay").textContent = "";
});

clearButton.addEventListener("click", () => {
  clear()
});

function setCurrentNumber(content, decimal) {
  const display = document.querySelector("#display");
  currentNumber = content;
  if (decimal) display.textContent = content; else display.textContent = parseFloat(content);
}

function setPreviousNumber(input) {
  const previousNumberDisplay = document.querySelector("#previousNumberDisplay");
  if (input == Infinity) {
    clear()
    previousNumberDisplay.textContent = ("ERROR!");
    return;
  }
  previousNumber = input;
  previousNumberDisplay.textContent = parseFloat(input);
  setCurrentNumber(0);
}

function clear() {
  currentNumber = "";
  userOperation = "";
  document.querySelector("#operationDisplay").textContent = "";
  setCurrentNumber(0);
  setPreviousNumber(0);
}

function operate(firstN, oper, secondN) {
  const result = operators[oper](parseFloat(firstN), parseFloat(secondN));
  currentNumber = "";
  userOperation = "";
  setCurrentNumber(0);
  setPreviousNumber(result);
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