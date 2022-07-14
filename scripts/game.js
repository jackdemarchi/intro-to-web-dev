function ballGame() {
  const ball = document.getElementById("ball");

  function up() {
    // const top = parseFloat(ball.style.top);
    // ball.style.top = top - 10 + "px";
    BALL_VELOCITY = Math.min(5, BALL_VELOCITY + 0.1);
  }
  function down() {
    // const top = parseFloat(ball.style.top);
    // ball.style.top = top + 10 + "px";
    BALL_VELOCITY = Math.max(0, BALL_VELOCITY - 0.1);
  }
  function left() {
    const right = parseFloat(ball.style.right);
    ball.style.right = right + 10 + "px";
    console.log("ciuppa");
  }
  function right() {
    const right = parseFloat(ball.style.right);
    ball.style.right = right - 10 + "px";
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

  let start = undefined;
  let previousTimeStamp = 0;
  let done = false;
  let BALL_VELOCITY = 0.5;
  let ballX = 0;
  let ballDirectionX = 1;

  function step(timestamp) {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    const deltaTime = timestamp - previousTimeStamp;

    if (previousTimeStamp !== timestamp) {
      // Math.min() is used here to make sure the element stops at exactly 200px
      const deltaDistance = deltaTime * BALL_VELOCITY;
      const ballWidth = ball.getBoundingClientRect().width;
      if (
        ballDirectionX === 1 &&
        ballX + deltaDistance >= window.innerWidth - ballWidth
      ) {
        ballDirectionX = -1;
      } else if (ballDirectionX === -1 && ballX - deltaDistance <= 0) {
        ballDirectionX = 1;
      }
      ballX += deltaDistance * ballDirectionX;
      ball.style.transform = "translateX(" + ballX + "px)";
    }
    previousTimeStamp = timestamp;
    window.requestAnimationFrame(step);
  }

  window.requestAnimationFrame(step);
}

ballGame();
