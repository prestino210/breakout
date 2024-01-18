export default class particle {
    constructor(game, pX, pY, r, g, b) {
        this.game = game;
        this.x = pX;
        this.y = pY;
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = 0.25;
        this.deleted = false;
        this.dx = Math.random()*14 - 7;
        this.dy = Math.random()*14 - 7;
        this.rad = Math.random()*12 + 12;
        this.color = `rgba(${this.r},${this.g},${this.b},${this.a})`;
    }

    update() {
        this.color = `rgba(${this.r},${this.g},${this.b},${this.a})`;

        this.rad -= 0.25;
        this.a -= 0.005;
        if(this.rad <= 0 || this.a <= 0) {
            this.deleted = true;
        }
       

        if(this.x + this.dx > this.game.x + this.game.width) {
            this.dx = -this.dx;
        } else if(this.x + this.dx < this.game.x) {
            this.dx = -this.dx;
        } else if(this.y + this.dy > this.game.y + this.game.height) {
            this.dy = -this.dy;
        } else if(this.y + this.dy < this.game.y) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
    }

    draw(ctx) {
        if(this.rad > 0 && this.a > 0) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2);  
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
}