export default class Ball {
    constructor(game) {
        this.game = game;
        this.restart = false;
        this.gameOver = false;
        this.x = game.screenWidth/2;
        this.y = game.screenHeight - ((1/3)*game.screenHeight);
        this.rad = 25;
        this.speed = 10
        this.angle = Math.random()*360;
        this.dx = Math.cos(this.angle*(Math.PI/180))*this.speed;
        this.dy = Math.sin(this.angle*(Math.PI/180))*this.speed;
        this.color = "rgb(255,255,255)";
        this.timer = Date.now();
        this.delay = 1500;
    }

    update() {
        if(!this.restart) {
            this.x += this.dx;
            this.y += this.dy;

            if(this.x + this.rad/2 + this.dx >= this.game.screenWidth || this.x - this.rad/2 + this.dx <= 0)  {
                this.dx = -this.dx;
            }
            if(this.y - this.rad/2 + this.dy <= 0)  {
                this.dy = -this.dy;
            }


        } else {
            let currentTime = Date.now();
            let differenceTime = currentTime - this.timer;
            if(differenceTime >= this.delay) {
                this.restart = false;
                this.timer = Date.now();
            }
        }

        if(this.y >= this.game.screenHeight) { 
            if(this.game.tries < 3) {
                this.game.tries++;
                this.x = this.game.screenWidth/2;
                this.y = this.game.screenHeight - ((1/3)*this.game.screenHeight);
                this.dx = Math.random()*30-15;
                this.dy = Math.random()*-15;
                this.restart = true;
                this.timer = Date.now();
            } else if(this.game.tries == 3) {
                this.gameOver = true;
            }
            
        }
    }

    draw(ctx) {
        
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, Math.PI*2);
        ctx.fill(); 
        
    }
}