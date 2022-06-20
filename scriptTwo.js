// Calculator object idea from https://freshman.tech/calculator/

// VARIABLES

const screen = document.querySelector(".screen");
const subScreen = document.querySelector(".sub-screen");
// const btnContainer = document.querySelector(".btn-container");
const eyeContainer = document.querySelector(".eye-container");
const mouth = document.querySelector(".mouth");
const power = document.querySelector(".power-btn");
const answerArea = document.createElement("INPUT");
const btn = document.querySelectorAll(".btn");

const calculator = {
    displayValue: "0",
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

// FUNCTIONS

function refreshPage(){
    window.location.reload();
}

let add = (num1,num2) => {
    return num1 + num2;
}
let subtract = (num1,num2) => {
    return num1 - num2;
}
let multiply = (num1,num2) => {
    return num1 * num2;
}
let divide = (num1,num2) => {
    return num1 / num2;
}

let operate = (operation,num1,num2) => {
    let opFuncArray = [
        {operator: "+",function: add(num1,num2),},
        {operator: "-",function: subtract(num1,num2),},
        {operator: "x",function: multiply(num1,num2),},
        {operator: "/",function: divide(num1,num2),}
    ];

    for (let i = 0; i < opFuncArray.length; i++) {
        if (operation == opFuncArray[i].operator) {
            return opFuncArray[i].function;
        }
    }
}

function resetCalculator() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

const input = (digit) => {
    if (calculator.displayValue === "0" || calculator.waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = calculator.displayValue + digit;
    }

    console.log(calculator);
}

const decimal = (dot) => {
    if (calculator.displayValue.includes(".")) {
        return
    } else {
        calculator.displayValue = calculator.displayValue + dot;
    }

    console.log(calculator);
}

const neg = (minus) => {
    if (calculator.displayValue.includes("-")) {
        calculator.displayValue = calculator.displayValue.replace("-", "");
    } else if (calculator.displayValue === "0") {
        calculator.displayValue = minus;
    } else {
        calculator.displayValue = minus + calculator.displayValue;
    }

    console.log(calculator);
}

const wipe = (wipeType) => {
    if (calculator.displayValue === "0") {
        return;
    } else {
        if (wipeType === "delete") {
            calculator.displayValue = calculator.displayValue.slice(0,calculator.displayValue.length - 1);
        } else {
            resetCalculator();
            //calculator.displayValue = "0";
        }
    }

    console.log(calculator);
}

const operation = (operand) => {
    let inputValue = parseFloat(calculator.displayValue)

    if (calculator.firstOperand === null && !isNaN(calculator.displayValue)) {
        calculator.firstOperand = parseFloat(calculator.displayValue);
    } else if (calculator.operator) {
        let result = operate(calculator.operator,calculator.firstOperand,inputValue);
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }

    calculator.operator = operand;
    calculator.waitingForSecondOperand = true;
    console.log(calculator);
}

// DOM MANIPULATION

power.addEventListener("click", () => {
    if (screen.contains(eyeContainer)) {
        //remove face
        eyeContainer.remove();
        mouth.remove();
        //add attribute screen-two
        screen.setAttribute("id","screen-two");
        //add input
        screen.append(answerArea);
        answerArea.setAttribute("class","sub-screen");
        answerArea.setAttribute("value","");
    } else {
        refreshPage();
    }
});

btn.forEach(function (i) {
    i.addEventListener("click", () => {
        if (i.classList.contains("operation")) {
            operation(i.value);
        } else if (i.classList.contains("sign")) {
            neg(i.value);
        } else if (i.classList.contains("decimal")) {
            decimal(i.value);
        } else if (i.classList.contains("wipe")) {
            wipe(i.value);
        } else if (i.classList.contains("num")) {
            input(i.value);
        }

        answerArea.value = calculator.displayValue;
        //screen.innerText = calculator.displayValue;
        console.log(calculator);
    });
});