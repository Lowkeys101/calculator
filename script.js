function add (a, b) {
    return (parseFloat(a) + parseFloat(b)).toFixed(4);
}

function subtract (a, b) {
    return (parseFloat(a) - parseFloat(b)).toFixed(4);
}

function multiply (a, b) {
    return (parseFloat(a) * parseFloat(b)).toFixed(4);
}

function divide (a, b) {
    if (b === "0") {
        return "universe gone"
    }
    return (parseFloat(a) / parseFloat(b)).toFixed(4);
}

function operate (operator, a, b) {
    return window[operator](a, b);
}



const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
let displayValue = display.textContent;
let firstValue = 0;
let secondValue = 0;
let operatorPressed = false;
let firstNumberNext = true;
let operatorValue;

const handleButtons = function(e) {
    
    const buttonTextContent = e.target.textContent;
    if (isNaN(buttonTextContent)){
        if (buttonTextContent.toLowerCase() === "clear") {
            displayValue = "0";
            firstValue = 0;
            secondValue = 0;
            operatorPressed = false;
            firstNumberNext = true;
        } else if (buttonTextContent.toLowerCase() === "=") {
            secondValue = displayValue;
            displayValue = operate(operatorValue, firstValue, secondValue);
        } else {
            if(operatorPressed === true) {
                secondValue = displayValue;
                displayValue = operate(operatorValue, firstValue, secondValue);
                firstValue = displayValue;
            } else {
                firstValue = displayValue;
            }
            operatorValue = buttonTextContent.toLowerCase();
            firstNumberNext = true;
            operatorPressed = true;
        }
    } else {
        if (displayValue === "0" || firstNumberNext) {
            displayValue = buttonTextContent;
            firstNumberNext = false;
        } else {
            displayValue += buttonTextContent;
        }
    }
    display.textContent = displayValue;
}

buttons.forEach(button => button.addEventListener("click", handleButtons));
