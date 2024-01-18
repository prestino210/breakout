import TouchTrigger from "./TouchTrigger.js";

export default class Dragger {
    constructor(game) {
        this.game = game;
        this.rad = 20;
        this.width = 40;
        this.drX = this.game.screenWidth/2;
        this.drY = this.game.screenHeight/2;
        this.i = this.game.input;
        this.dragging = false;
        this.triggerDown = false;
        this.tt = new TouchTrigger(this.game, this);
    }

    update() {
        if(this.i.touchDown) {
            let mX = this.i.touchX; let mY = this.i.touchY;
            let x = this.drX - this.rad;
            let y = this.drY - this.rad;
            let w = this.width;
            if(mX > x && mX < x + w && mY > y && mY < y + w) {
                this.dragging = true;
                
            }
        }
        if(this.dragging && !this.i.touchDown) {
            this.dragging = false;
        } else if(this.dragging && this.i.touchDown) {
            this.drX = this.i.touchX;
            this.drY = this.i.touchY;
        }

        this.tt.update();
    }

    draw(ctx) {
        
        ctx.beginPath();
        ctx.arc(this.drX, this.drY, this.rad, 0, Math.PI * 2);  
        ctx.fillStyle = "rgba(0,0,0,0.5)";
        ctx.strokeStyle = "rgba(255,255,255,0.5)"
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        this.tt.draw(ctx);
        
    }
}