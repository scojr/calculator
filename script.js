// script.js

let firstNumber;
let secondNumber;
const operators = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
}

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