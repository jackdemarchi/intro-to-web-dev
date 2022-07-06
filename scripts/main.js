const myHeading = document.querySelector('h1');
myHeading.textContent = 'Benvenuti!';


function ballGame() {
  console.log("ballGame start");
  const ball = document.getElementById("ball");

  function up() {
      const top = parseFloat(ball.style.top);
      ball.style.top = top - 10;
  }
  function down() {
      const top = parseFloat(ball.style.top);
      ball.style.top = top + 10;
  }
  function left() {
      const right = parseFloat(ball.style.right);
      ball.style.right = right + 10;
  }
  function right() {
      const right = parseFloat(ball.style.right);
      ball.style.right = right - 10;
  }

  document.onkeydown = function (event) {
      switch (event.keyCode) {
          case 37:
              left();
              console.log("Left key is pressed.");
              break;
          case 38:
              up();
              break;
          case 39:
              right();
              console.log("Right key is pressed.");
              break;
          case 40:
              down();
              break;
      }
  };
}



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
  

ballGame();
//document.querySelector('html').addEventListener('click', () => {
  //alert('Ouch! Stop poking me!');
//});
