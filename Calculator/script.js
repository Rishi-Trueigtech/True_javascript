function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error";
    }
    return a / b;
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        
        let operator = expression.match(/[\+\-\*\/]/);
        if (!operator) {
            return;
        }

        let numbers = expression.split(operator[0]).map(Number);

        let result;
        switch (operator[0]) {
            case '+':
                result = add(numbers[0], numbers[1]);
                break;
            case '-':
                result = subtract(numbers[0], numbers[1]);
                break;
            case '*':
                result = multiply(numbers[0], numbers[1]);
                break;
            case '/':
                result = divide(numbers[0], numbers[1]);
                break;
        }

        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Error";
    }
}
