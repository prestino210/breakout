export default class TouchTrigger {
    constructor(game, dragger) { 
        this.game = game;
        this.dragger = dragger;
        this.rad = 45;
        this.width = 90;
        this.drX = this.game.screenWidth - this.rad - 30;
        this.drY = this.game.screenHeight - this.rad - 30;
        this.i = this.game.input;
    }

    update() { 
        if(this.i.touchDown) {
            let mX = this.i.touchX; let mY = this.i.touchY;
            let x = this.drX - this.rad;
            let y = this.drY - this.rad;
            let w = this.width;
            if(mX > x && mX < x + w && mY > y && mY < y + w) {
                this.dragger.triggerDown = true; 
            }
        }
    }

    draw(ctx) { 
        ctx.beginPath();
        ctx.arc(this.drX, this.drY, this.rad, 0, Math.PI * 2);  
        ctx.fillStyle = "rgb(0,0,0)"
        ctx.strokeStyle = "rgb(255,255,255)"
        ctx.lineWidth = 2.5;
        ctx.fill();
        ctx.stroke();
    }
}