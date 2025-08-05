const display = document.getElementById('display');
const expressionDisplay = document.getElementById('expression'); 
let currentInput = '0'; 
let fullExpression = ''; 
let resetDisplay = false; 


function updateDisplay() {
    const maxDisplayLength = 10; 
    const maxExpressionLength = 25; 

   
    if (currentInput.length > maxDisplayLength) {
       
        display.textContent = parseFloat(currentInput).toPrecision(8);
    } else {
        display.textContent = currentInput;
    }

   
    if (fullExpression.length > maxExpressionLength) {
       
        expressionDisplay.textContent = '...' + fullExpression.slice(-maxExpressionLength);
    } else {
        expressionDisplay.textContent = fullExpression;
    }
}

function appendInput(value) {

    if (resetDisplay) {
        currentInput = '0';
        fullExpression = '';
        resetDisplay = false;
    }

    if (!isNaN(value) || value === '.') {
       
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
          
            if (fullExpression === '' || ['+', '-', '*', '/', '(', ')'].includes(fullExpression.slice(-1))) {
                fullExpression += value;
            } else {
              
                fullExpression = fullExpression.slice(0, -1) + value;
            }
        } else if (value === '.' && currentInput.includes('.')) {
          
            return;
        } else {
            currentInput += value;
            fullExpression += value;
        }
    }
  
    else if (['+', '-', '*', '/'].includes(value)) {
       
        const lastChar = fullExpression.slice(-1);
        if (['+', '-', '*', '/'].includes(lastChar)) {
         
            fullExpression = fullExpression.slice(0, -1) + value;
        } else if (fullExpression === '' && currentInput !== '0') {
          
            fullExpression = currentInput + value;
        } else {
          
            fullExpression += value;
        }
        currentInput = '0'; 
    }

    else if (value === '(' || value === ')') {
        fullExpression += value;
      
    }
  
    else if (value === '%') {
        try {
          
            const percentValue = parseFloat(currentInput) / 100;
            currentInput = percentValue.toString();
           
            const lastNumberMatch = fullExpression.match(/(\d+\.?\d*)$/);
            if (lastNumberMatch) {
                fullExpression = fullExpression.slice(0, -lastNumberMatch[0].length) + currentInput;
            } else {
                fullExpression = currentInput;
            }
        } catch (e) {
            currentInput = 'Error';
            fullExpression = '';
            resetDisplay = true;
        }
    }

    updateDisplay();
}


function deleteLast() {
    if (fullExpression.length > 0) {
        fullExpression = fullExpression.slice(0, -1); 


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



function calculateResult() {
    try {
       
        let evalExpression = fullExpression.replace(/×/g, '*').replace(/÷/g, '/');

       
        const result = new Function('return ' + evalExpression)();

        
        if (isNaN(result) || !isFinite(result)) {
            throw new Error("Error"); 
        }

       
        fullExpression = fullExpression + ' =';
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


updateDisplay();
