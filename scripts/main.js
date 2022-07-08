const myHeading = document.querySelector('h1');
myHeading.textContent = 'Benvenuti!';


function sum(){
    const firstOperand = getOperand("first-operand");
    const secondOperand = getOperand("second-operand");
    setResult(firstOperand + secondOperand);
}
function diff(){
    const firstOperand = getOperand("first-operand");
    const secondOperand = getOperand("second-operand");
    setResult(firstOperand - secondOperand);
}
function divide(){
    const firstOperand = getOperand("first-operand");
    const secondOperand = getOperand("second-operand");
    setResult(firstOperand / secondOperand);
}
function multiply(){
    const firstOperand = getOperand("first-operand");
    const secondOperand = getOperand("second-operand");
    setResult(firstOperand * secondOperand);
}


function getOperand(operandId){
    const operandTextValue = document.getElementById(operandId).value;
    const operand = parseFloat(operandTextValue);
    return operand;
}

function setResult(result) {
    document.getElementById("result").innerText = result;
}