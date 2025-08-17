// =============================
// GETTING DOM ELEMENTS
// =============================
const display = document.getElementById('display');             // Shows the current result
const expressionDisplay = document.getElementById('expression'); // Shows the full expression

// =============================
// STATE VARIABLES
// =============================
let currentInput = '0';  // Stores the current number being typed
let fullExpression = ''; // Stores the entire expression
let resetDisplay = false; // If true, the next input will reset the calculator

// =============================
// UPDATE DISPLAY FUNCTION
// =============================
function updateDisplay() {
    const maxDisplayLength = 10;  // Limit for current number display
    const maxExpressionLength = 25; // Limit for full expression display

    // Handle large number formatting
    if (currentInput.length > maxDisplayLength) {
        display.textContent = parseFloat(currentInput).toPrecision(8);
    } else {
        display.textContent = currentInput;
    }

    // Shorten long expressions with '...'
    if (fullExpression.length > maxExpressionLength) {
        expressionDisplay.textContent = '...' + fullExpression.slice(-maxExpressionLength);
    } else {
        expressionDisplay.textContent = fullExpression;
    }
}

// =============================
// APPEND INPUT FUNCTION
// Called when a button is pressed
// =============================
function appendInput(value) {

    // If the display was reset after a calculation
    if (resetDisplay) {
        currentInput = '0';
        fullExpression = '';
        resetDisplay = false;
    }

    // =============================
    // Case 1: Numbers and Decimal Points
    // =============================
    if (!isNaN(value) || value === '.') {
        // Replace leading zero unless it's a decimal
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
            fullExpression += value;
        }
        // Prevent multiple decimal points in the same number
        else if (value === '.' && currentInput.includes('.')) {
            return; // Ignore extra '.'
        }
        // Append normally
        else {
            currentInput += value;
            fullExpression += value;
        }
    }

    // =============================
    // Case 2: Operators (+, -, *, /)
    // =============================
    else if (['+', '-', '*', '/'].includes(value)) {
        const lastChar = fullExpression.slice(-1);
        // Replace last operator if already one
        if (['+', '-', '*', '/'].includes(lastChar)) {
            fullExpression = fullExpression.slice(0, -1) + value;
        }
        // Append operator normally
        else if (fullExpression !== '') {
            fullExpression += value;
        }
        currentInput = '0';
    }

    // =============================
    // Case 3: Parentheses
    // =============================
    else if (value === '(' || value === ')') {
        fullExpression += value;
    }
   
    updateDisplay();
}

// =============================
// DELETE LAST CHARACTER
// =============================
function deleteLast() {
    if (fullExpression.length > 0) {
        fullExpression = fullExpression.slice(0, -1);

        // Get the last number after deletion
        const lastNumberMatch = fullExpression.match(/(\d+\.?\d*)$/);
        if (lastNumberMatch) {
            currentInput = lastNumberMatch[1];
        } else if (fullExpression === '') {
            currentInput = '0';
        } else {
            currentInput = '0';
        }
    } else {
        currentInput = '0';
    }
    updateDisplay();
}

// =============================
// CALCULATE RESULT
// =============================
function calculateResult() {
    try {
        // Security check: Only allow numbers, operators, and parentheses
        if (!/^[0-9+\-*/().% ]+$/.test(fullExpression)) {
            throw new Error("Invalid Input");
        }

        // Replace symbols for JS evaluation
        let evalExpression = fullExpression.replace(/×/g, '*').replace(/÷/g, '/');

        // Safely evaluate
        const result = Function('"use strict"; return (' + evalExpression + ')')();

        // Handle invalid or infinite results
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Error");
        }

        // Update expression and current input
        fullExpression += ' =';
        currentInput = result.toString();
        resetDisplay = true;
        updateDisplay();
    } catch (error) {
        currentInput = 'Error';
        fullExpression = '';
        resetDisplay = true;
        updateDisplay();
        console.error("Calculation error:", error);
    }
}

// =============================
// CLEAR DISPLAY
// =============================
function clearDisplay() {
    currentInput = '0';
    fullExpression = '';
    resetDisplay = false;
    updateDisplay();
}

// =============================
// INITIAL DISPLAY UPDATE
// =============================
updateDisplay();
