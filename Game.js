import Ball from "./Ball.js"
import Brick from "./Brick.js"
import Input from "./Input.js"
import Paddle from "./Paddle.js"

export default class Game {
    constructor(WIDTH, HEIGHT) {
        this.screenWidth = WIDTH;
        this.screenHeight = HEIGHT;
        this.tries = 0;
        this.rows = 3;
        this.cols = 11;
        this.bricksWidth = (1/this.cols)*(80/100)*this.screenWidth;
        this.bricksHeight = (1/this.rows)*(30/100)*this.screenHeight;
        this.input = new Input();
        this.paddle = new Paddle(this);

        this.colors = ["red", "yellow", "green"];

        this.ball = new Ball(this);
        this.bricks = [];
        for(let i = 0; i < this.rows; i++) {
            for(let j = 0; j < this.cols; j++) {
                let b = new Brick(this, (this.bricksWidth)*j + ((1/10)*this.screenWidth),
                 (this.bricksHeight+50)*i + ((1/10)*this.screenHeight), i, this.colors[i]);
                this.bricks.push(b);
            }
        }
    }

    update() { 
        this.bricks = this.bricks.filter((b) => !b.deleted);
        if(!this.ball.gameOver) {
            this.ball.update();
        }
        this.paddle.update();
    }

    draw(ctx) {
        if(!this.ball.gameOver) {
            this.ball.draw(ctx);
        }
        this.bricks.forEach((b) => {
            b.draw(ctx);
        });
        this.paddle.draw(ctx);
    }
}