export default class Ball {

    constructor(game) {
        this.image = document.getElementById('ball');

        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.position = {
            x: this.gameHeight / 2 - 50 / 2,
            y: this.gameWidth / 2 + 50 / 2
        }

        this.speed = {
            x: 2,
            y: 2
        };
        this.size = 50;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }

    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }
    }
}