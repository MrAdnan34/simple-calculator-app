let display = document.getElementById("screen");

const allClear = () => {
    display.value = "";
}

const clearOneElement = () => {
    display.value = display.value.slice(0, -1);
}

const show = (n) => {
    display.value += n;
}

const calculate = () => {
    display.value = eval(display.value);
}

const percentage = () => {
    display.value = (parseFloat(display.value) / 100).toFixed(2);
}

// --------------

// let display = document.getElementById("screen");
// let result = null;
// let lastOperator = null;

// const allClear = () => {
//     display.value = "";
//     result = null;
//     lastOperator = null;
// };

// const clearOneElement = () => {
//     display.value = display.value.slice(0, -1);
// };

// const show = (n) => {
//     if (n === "%") {
//         if (result === null) {
//             result = parseFloat(display.value) / 100;
//             display.value = result.toFixed(2) + "%";
//         } else {
//             let currentNumber = parseFloat(display.value);
//             let tempResult = null;
//             if (lastOperator === "+") {
//                 tempResult = result + (result * currentNumber) / 100;
//             } else if (lastOperator === "-") {
//                 tempResult = result - (result * currentNumber) / 100;
//             } else if (lastOperator === "*") {
//                 tempResult = (result * currentNumber) / 100;
//             } else if (lastOperator === "/") {
//                 tempResult = (result / currentNumber) * 100;
//             }
//             result = tempResult;
//             display.value = result.toFixed(2) + "%";
//         }
//     } else {
//         display.value += n;
//     }
// };

// const calculate = () => {
//     let expression = display.value;
//     if (lastOperator === "%" && expression.slice(-1) === "%") {
//         expression = expression.slice(0, -1);
//     }
//     result = eval(expression);
//     display.value = result.toFixed(2);
// };

// const setOperator = (operator) => {
//     if (result === null) {
//         result = parseFloat(display.value);
//     } else {
//         let currentNumber = parseFloat(display.value);
//         if (lastOperator === "+") {
//             result += currentNumber;
//         } else if (lastOperator === "-") {
//             result -= currentNumber;
//         } else if (lastOperator === "*") {
//             result *= currentNumber;
//         } else if (lastOperator === "/") {
//             result /= currentNumber;
//         }
//     }
//     display.value = "";
//     lastOperator = operator;
// };
