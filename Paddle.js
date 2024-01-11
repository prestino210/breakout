export default class paddle {
    constructor(game) {
        this.game = game;
        this.width = 100;
        this.height = 25;
        this.x = (this.game.screenWidth/2)-(this.width/2);
        this.y = ((this.game.screenHeight) - 60)-(this.height/2);
        
    }

    update() {
        
        if(this.game.input.mouseX != null) {
            this.x = this.game.input.mouseX - (this.width/2);
        } else if(this.game.input.mouseX == null) {
            this.x = (this.game.screenWidth / 2) - (this.width/2);
        }
        
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}