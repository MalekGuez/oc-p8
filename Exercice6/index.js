function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;

    if (/\/\s*0(?![^\d])/g.test(expression)) {
        display.value = 'Division by zero is not allowed';
        return;
    }

    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Error';
    }
}