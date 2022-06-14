// I was thinking of creating entries in the form of a list. This way
// I can create four list nodes for each of the variables.

let userNumbOne;
let userNumbTwo;
let userOperator;
let ans;

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
        {operator: "*",function: multiply(num1,num2),},
        {operator: "/",function: divide(num1,num2),}
    ];

    for (let i = 0; i < opFuncArray.length; i++) {
        if (operation == opFuncArray[i].operator) {
            return opFuncArray[i].function;
        }
    }
}

//console.log(operate("/",7,2));