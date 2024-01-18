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
        this.input = new Input(this);
        this.paddle = new Paddle(this);
        this.score = 0;
        this.won = false;
        this.lost = false;

        this.isMobile = /Mobile/.test(navigator.userAgent);

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
        if(!this.isMobile) {
            this.bricks = this.bricks.filter((b) => !b.deleted);
            if(!this.lost && !this.won) {
                this.ball.update();
            }
            this.paddle.update();
        }
    }

    draw(ctx) {
        if(!this.isMobile) {
            if(!this.lost && !this.won) {
                this.ball.draw(ctx);
            }
            this.bricks.forEach((b) => {
                b.draw(ctx);
            });
            this.paddle.draw(ctx);
    
            ctx.font = "Bold 50px arial"
            if (this.won) { 
                let text = ctx.measureText("You won!");
                ctx.fillStyle = "rgb(0,0,255)"
                ctx.fillText("You won!", (this.screenWidth/2) - (text.width/2), (this.screenHeight/2) - (40/2));
            } else if(this.lost) { 
                let text = ctx.measureText("Game over");
                ctx.fillStyle = "rgb(255,0,0)"
                ctx.fillText("Game over", (this.screenWidth/2) - (text.width/2), (this.screenHeight/2) - (40/2));
            }
        } else if(this.isMobile) {
            ctx.font = "Bold 25px arial"
            let text = ctx.measureText("Game not mobile supported :(");
            ctx.fillStyle = "rgb(0,255,0)"
            ctx.fillText("Game not mobile supported :(", (this.screenWidth/2) - (text.width/2), (this.screenHeight/2) - (40/2));
        }
        
    }
}