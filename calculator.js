
const digits = document.querySelectorAll(".digit");

digits.forEach(
    function(button) {
      button.onclick = onDigitClick;
    }
);

const display = document.querySelector(".display");

function onDigitClick(event) {
    const clickedButton = event.target;
    display.textContent = clickedButton.textContent;
}

