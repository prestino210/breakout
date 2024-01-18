import particle from "./Particle.js";

export default class Circle {

    constructor(game) {
        this.game = game;
        this.input = this.game.input;
        this.deleted = false;
        this.growing = true;
        this.selected = false;

        this.rad = 3;
        this.x = Math.random() * game.width + game.x;
        this.y = Math.random() * game.height + game.y;
        this.dx = Math.random() * 10 - 5;
        this.dy = Math.random() * 10 - 5;
        this.dist;
        this.exploding = false;

        this.r = Math.random() * 10 + 10; 
        this.g = Math.random() * 100 + 100;
        this.b = Math.random() * 50 + 200;
        this.color = `rgba(${this.r},${this.g},${this.b},0.25)`;

    }

    update() {
        if(this.growing) {
            this.rad += 1;

            if(this.rad >= 20) {
                this.growing = false;
            }
        }

        if(this.exploding) {
            this.rad += 1;

            if(this.rad >= 30) {
                this.exploding = false;
                let red; let green; let blue;
                if(this.dist < 150) {
                    red = 255-this.dist;
                    green = 150-this.dist;
                    blue = this.b;
                }

                for(let i = 0; i < 10; i++) {
                    let p = new particle(this.game, this.x, this.y, red, green, blue);
                    this.game.particles.push(p);
                }
                if(this.game.soundCache < this.game.maxSounds) {
                    this.game.soundCache++;
                    this.game.soundEffect("pop.wav", 1);
                }
                
                this.deleted = true;
            }
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
        
        ctx.beginPath();

        let distX = this.input.mouseX - this.x;
        let distY = this.input.mouseY - this.y;
        this.dist = Math.sqrt((distX * distX) + (distY * distY));
        if(this.dist < 150) {
            if(!this.selected && this.game.soundCache < this.game.maxSounds) {
                this.game.soundCache++;
                let randNum = Math.random()*100;
                if(randNum <= 50) {
                    this.game.soundEffect("hover_1.mp3", 0.09);
                } else if(randNum > 50) {
                    this.game.soundEffect("hover_2.mp3", 0.12);
                }
                this.selected = true;
            }
           
            this.color = `rgba(${255-this.dist},${150-this.dist},${this.b},0.5)`;
            ctx.arc(this.x, this.y, this.rad+((150-this.dist)/2), 0, Math.PI * 2);

            if(!this.game.isMobile) {
                if(this.input.mouseDown && this.dist <= this.rad+((150-this.dist)/2)) {
                    this.exploding = true;
                }
            } else if(this.game.isMobile) {
                if(this.game.dragger.triggerDown && this.dist <= this.rad+((150-this.dist)/2)) {
                    this.exploding = true; 
                    this.game.dragger.triggerDown = false;
                }
            }
            
            
        } else {
            this.selected = false;
            this.color = `rgba(${this.r},${this.g},${this.b},0.5)`;
            ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2);
           
        }
       
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}
