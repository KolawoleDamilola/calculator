 const calculator={
  add:function(num1,num2){
  return num1 + num2;
  },
     subtract:function(num1,num2){
        return num1 - num2;
    },
    multiply:function(num1,num2){ 
        return num1 * num2;
    },
    divide:function(num1,num2)
    {return num1 / num2;
    }
};

const firstNumber = parseFloat(prompt("Enter the first number:"));
const secondNumber = parseFloat(prompt("Enter the second number"));
const operator = prompt("Enter the arithmetic operator(+,-,*,/):");

let result;

switch(operator){
    case "+":
    result =calculator.add(firstNumber,secondNumber);
    break;
    case "-":
    result =calculator.subtract(firstNumber,secondNumber);
    break;
    case "*":
    result =calculator.multiply(firstNumber,secondNumber);
    break;
    case "/":
    result =calculator.divide(firstNumber,secondNumber);
    break;
    default:
     result = "Error";
}
document.getElementById("demo").innerHTML = result;
