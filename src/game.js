import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);

        this.gameObjects = [
            this.ball,
            this.paddle
        ]

        new InputHandler(this.paddle);
    }

    update(deltaTime) {
        this.paddle.update(deltaTime);
        this.ball.update(deltaTime);
    }

    draw(ctx) {
        this.paddle.draw(ctx);
        this.ball.draw(ctx);
    }
}