// script.js

let displayElement = document.getElementById('display');

function clearDisplay() {
    displayElement.innerText = '0';
}

function deleteLast() {
    displayElement.innerText = displayElement.innerText.slice(0, -1);
    if (displayElement.innerText === '') {
        displayElement.innerText = '0';
    }
}

function appendToDisplay(value) {
    if (displayElement.innerText === '0' && value !== '.') {
        displayElement.innerText = value;
    } else {
        displayElement.innerText += value;
    }
}

function calculate() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch (error) {
        displayElement.innerText = 'Error';
    }
}
