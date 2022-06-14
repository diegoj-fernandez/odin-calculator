const numBtn = document.querySelectorAll(".num");
const operationBtn = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");
const clrBtn = document.querySelector(".clr");
const screen = document.querySelector(".screen");
const btnContainer = document.querySelector(".btn-container");
const firstNumber = document.createElement("p");
const operation = document.createElement("p");
const secondNumber = document.createElement("p");
const finalNumber = document.createElement("p");
const eyeContainer = document.querySelector(".eye-container");
const mouth = document.querySelector(".mouth");

let numberOne;
let ans;
let numberTwo;

// CALCULATOR FUNCTIONS

const add = function(num1,num2) {
    // if (num1 >= 0 && num2 >= 0) {
    //   return num1 + num2;
    // }
    return num1 + num2;
};
  
const subtract = function(num1,num2) {
      return num1 - num2;
};
  
//const sum = function(array1) {
//       if (array1 == "") {
//       return 0;
//     } else if (array1.length == 1) {
//       return array1[array1.length - 1];
//     } else {
//       let initial = 0;
//       for (let i = 0; i < array1.length; i++) {
//         initial += array1[i];
//       }
//       return initial;
//     }
//};
  
const multiply = function(num1,num2) {
    return num1 * num2;
};

const divide = function(num1,num2) {
    return num1 / num2;
};
  
//const power = function(num1,num2) {
//     let initial = num1;
//       for (let i = 0; i < num2 - 1; i++) {
//       initial *= num1;
//     }
//     return initial;
//};
  
//const factorial = function(num1) {
//       if (num1 == 0 || num1 == 1) {
//       return 1;
//     } else {
//       let array1 = [];
//       for (let i = 1; i <= num1; i++) {
//         array1.push(i);
//       }
//       return multiply(array1);
//     }
//};


// DOM MANIPULATION

btnContainer.addEventListener("mousedown", () => {
    if (screen.contains(eyeContainer) || screen.contains(mouth)) {
        eyeContainer.remove();
        mouth.remove();
        screen.style.background = `#000000`;
        screen.style.color = `#33ff00`;
        screen.style.display = `block`
        screen.style.padding = `10px`
    }
});

numBtn.forEach(function (i) {
    i.addEventListener("click", () => {
        if (!screen.contains(operation)) {
            if (!screen.contains(firstNumber)) {
                firstNumber.setAttribute("class", "input");
                firstNumber.innerText = i.innerText;
                screen.append(firstNumber);
            } else {
                if (firstNumber.innerText.length >= 10) {
                    return;
                } else {
                    firstNumber.innerText = firstNumber.innerText + i.innerText;
                }
            }
        } else {
            if (!screen.contains(secondNumber)) {
                operation.classList.remove("input");
                secondNumber.setAttribute("class", "input");
                secondNumber.innerText = i.innerText;
                screen.append(secondNumber);
            } else {
                if (secondNumber.innerText.length >= 10) {
                    return;
                } else {
                    secondNumber.innerText = secondNumber.innerText + i.innerText;
                }
            }
        }
    });
});

clrBtn.addEventListener("click", () => {
    screen.innerText = "";
});

operationBtn.forEach(function(i) {
    i.addEventListener("click", () => {
        firstNumber.classList.remove("input");
        operation.setAttribute("class", "input");
        operation.innerText = i.innerText;
        screen.append(operation);
    });
});

equal.addEventListener("click", () => {
    secondNumber.classList.remove("input");
    ans = operate(operation.innerText,Number(firstNumber.innerText), Number(secondNumber.innerText));
    finalNumber.setAttribute("class", "input");
    finalNumber.setAttribute("id", "answer");
    finalNumber.innerText = ans;
    screen.append(finalNumber);
});

// let operate = (num1,num2) => {
//     if (operation.innerText == "+") {
//         return add(num1,num2);
//     } else if (operation.innerText == "-") {
//         return subtract(num1,num2);
//     } else if (operation.innerText == "x") {
//         return multiply(num1,num2);
//     }else if (operation.innerText == "/") {
//         return divide(num1,num2);
//     }
// }

let operate = (operator,num1,num2) => {
    if (operator == "+") {
        return add(num1,num2);
    } else if (operator == "-") {
        return subtract(num1,num2);
    } else if (operator == "x") {
        return multiply(num1,num2);
    }else if (operator == "/") {
        return divide(num1,num2);
    }
}
