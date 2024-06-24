// script.js
let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperation(op) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operation = op;
    updateDisplay(); // Update display immediately after setting operation
    previousInput = currentInput;
    currentInput = '';
}


function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(current)) return;

    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '×':
            result = prev * current;
            break;
        case '÷':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = result;
    operation = undefined;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = undefined;
    updateDisplay();
}

function updateDisplay() {
    if (operation) {
        display.innerText = `${previousInput} ${operation} ${currentInput}`;
    } else {
        display.innerText = currentInput;
    }
}
clearDisplay();
