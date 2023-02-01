//global variables

const displayScreen = document.querySelector(".display"); 
let firstNumber = ""; 
let secondNumber = ""; 
let operation = null; 


//math operations

function add(a,b) {
    return a+b; 
}

function subtract(a,b){
    return a-b; 
}

function multiply(a,b){
    return a*b; 
}

function divide(a,b){
    return a/b; 
}

function operate(a, b, op) {
    switch (op) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return "Invalid operator";
    }
}

//display function 

function displayContent (text){
    displayScreen.textContent = text;
}



//event listener for operation buttons
const operators = document.querySelectorAll(".operation"); 
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        //add in 
        operation = operator.id;
    })
})

//event listener for number buttons 
const numButton = document.querySelectorAll(".num");
numButton.forEach((button) => {
    button.addEventListener('click', () => {
        if(operation !== null){
            secondNumber += button.textContent; 
            displayContent(secondNumber);
        }else{
            firstNumber += button.textContent; 
            displayContent(firstNumber);
        }
        
    });
});

//event listener for equal button
const equal = document.querySelector("#equal");
let result = ""; 
equal.addEventListener('click', () => {
    if (secondNumber !== ""){
        result = operate(Number(firstNumber), Number(secondNumber), operation) ;
        firstNumber = result; 
        secondNumber = ""; 
        operation = null; 
    } else {
        result = firstNumber;
    }

    displayContent(result);
    
});


//event listener for clear button 
const clear = document.querySelector("#clear"); 
clear.addEventListener('click', () => {
    displayScreen.textContent = 0; 
    firstNumber = "";
    secondNumber = ""; 
    operation = null;
})

//event listener for delete button
const remove = document.querySelector("#delete");
remove.addEventListener('click', () => {
    displayScreen.textContent = displayScreen.textContent.slice(0,-1);
    if(operation !== null){
        secondNumber = displayScreen.textContent; 
    }else{
        firstNumber = displayScreen.textContent;
    }

})

