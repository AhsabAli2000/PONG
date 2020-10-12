export default class Paddle {
    constructor(game){
      this.width = 30;
      this.height = 150;
  
      this.maxSpeed = 10;
      this.speed = 0;
  
      this.position = {
        x: game.gameWidth - game.gameWidth + 10,
        y: game.gameHeight /2 - this.height / 2
      };
    }
  
    moveUp() {
      this.speed = -this.maxSpeed;
    }
    moveDown() {
      this.speed = this.maxSpeed;
    }

    stop() {
      this.speed = 0;
    }
  
    draw(ctx){
      ctx.fillStyle = '#0f0';
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    } 
  
    update(deltaTime){
      this.position.y += this.speed;
  
      if (this.position.y < 0) this.position.y = 0;
        
      if (this.position.y > 600 - this.height) this.position.y = 600 - this.height;
    }
  }