let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(op) {
  operator = op;
  operand1 = currentInput;
  currentInput = '';
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  operand1 = '';
  updateDisplay();
}

function calculate() {
  let result;
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }

  currentInput = result.toString();
  operator = '';
  operand1 = '';
  updateDisplay();
}

function updateDisplay() {
  display.value = operand1 + ' ' + operator + ' ' + currentInput;
}
