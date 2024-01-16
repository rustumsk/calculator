let num1;
let num2;
let operator;
let count = 0;
let display = document.querySelector(".text");
let result = document.querySelector(".upperText");

let buttons = document.querySelectorAll(".button");
let deleteButton = document.querySelector(".delete")
    .addEventListener("click",() => {
        display.textContent = display.textContent.slice(0,-1);
        count !== 0? count--: count;
    })
let clearButton = document.querySelector(".clear")
    .addEventListener("click",() => {
        display.removeChild(display.lastChild);
        result.removeChild(result.lastChild);
        count = 0;
    })

let equalButton = document.querySelector(".equal").
    addEventListener("click", () =>{
            operator = checkOperator(display.textContent);
            let nums = display.textContent.split(operator);
            display.textContent = operateNum(operator,parseInt(nums[0]),parseInt(nums[1]));
            count = 0;
    })

buttons.forEach((button) =>{
    button.addEventListener("click",() =>{
        if(button.textContent === "+" || button.textContent === "-"
        || button.textContent === "*" || button.textContent === "/"
        || button.textContent === "^"){
            count++;
        }
        if (count === 2){
            operator = checkOperator(display.textContent);
            let nums = display.textContent.split(operator);
            result.textContent = operateNum(operator,parseInt(nums[0]),parseInt(nums[1])) + button.textContent;
            display.removeChild(display.lastChild);
            count = 0;
        }
        else{
            display.textContent = display.textContent + button.textContent;
        }
    })
})

function operateNum(operator,num1,num2){
    switch (operator){
        case "+":
            return addNum(num1,num2);
        case "-":
            return subNum(num1,num2);         
        case "*":
            return multNum(num1,num2);   
        case "/":
            return divNum(num1,num2); 
        case "^":
            return powNum(num1,num2);   
        default:
            console.log("Hello");
    }
}

function checkOperator(string){
    let split = string.split("");
    let value = "";
    split.forEach((char) => {
        switch (char){
            case "+":
                value = char;
                break;
            case "-":
                value = char;    
                break;  
            case "*":
                value = char;
                break;  
            case "/":
                value = char;
                break;
            case "^":
                value = char;
                break;
        }
    })
    return value;
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