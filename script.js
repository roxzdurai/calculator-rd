let currentInput = '';
let operator = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function operate(op) {
    if (currentInput !== '') {
        operator = op;
        currentInput += operator;
        display.innerText = currentInput;
    }
}

function calculateResult() {
    if (currentInput !== '') {
        currentInput = eval(currentInput).toString();
        display.innerText = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    display.innerText = '0';
}
