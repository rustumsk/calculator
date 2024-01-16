let num1;
let num2;
let operator;

function operateNum(operator,num1,num2){
    switch (operator){
        case "+":
            addNum(num1,num2);
            break;
        case "-":
            subNum(num1,num2);
            break;
        case "*":
            multNum(num1,num2);
            break;
        case "/":
            divNum(num1,num2);
            break;
        case "^":
            powNum(num1,num2);
            break;
        default:
            console.log("Hello");
    }
}
function addNum(num1,num2){
    return num1 + num2;
}
function subNum(num1,num2){
    return num1 - num2;
}
function multNum(num1,num2){
    return num1 * num2;
}
function divNum(num1,num2){
    return num1 / num2;
}
function powNum(num1,num2){
    return num1 ** num2;
}