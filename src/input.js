export default class InputHandler {
    constructor(paddle) {
      document.addEventListener('keydown', (event) => {
        switch (event.keyCode) {
          case 38:
          case 87:
            paddle.moveUp();
            break;
          case 40:
          case 83:
            paddle.moveDown();
            break;
        }
      });
      document.addEventListener('keyup', (event) => {
        switch (event.keyCode) {
          case 38:
          case 87:
            if (paddle.speed < 0) paddle.stop();
            break;
          case 40:
          case 83:
            if (paddle.speed > 0) paddle.stop();
            break;
        }
      });
    }
  }