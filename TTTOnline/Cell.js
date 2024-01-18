export default class Cell {
    constructor(game, x, y) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = this.game.squareSize;
        this.height = this.game.squareSize;
        this.piece = "";
        this.filled = false;
    }

    update() {

        if(this.game.input.mouseDown && this.piece == "") {
            let mX = this.game.input.mouseX;
            let mY = this.game.input.mouseY;

            if(mX > this.x && mX < this.x + this.width && mY > this.y && mY < this.y + this.height) {
                if(this.game.turn == 0) {
                    this.piece = "X"
                    this.game.turn++;
                } else if(this.game.turn == 1) {
                    this.piece = "O"
                    this.game.turn = 0;
                }
            }
        }

        if(this.piece != "") {
            this.filled = true;
        }
    }

    draw(ctx) {
        if(!(this.game.xWon || this.game.oWon || this.game.tie)) {  
            if(this.piece == "X") {
                ctx.fillStyle = "rgb(255,0,0)"
            } else if(this.piece == "O") {
                ctx.fillStyle = "rgb(0,0,255)"
            } else if(this.piece == "") {
                ctx.fillStyle = "rgb(255,255,0)"
            }
            
        } else if(this.game.xWon || this.game.oWon || this.game.tie) { 
            if(this.piece == "X") {
                ctx.fillStyle = "rgba(255,0,0,0.5)"
            } else if(this.piece == "O") {
                ctx.fillStyle = "rgba(0,0,255,0.5)"
            } else if(this.piece == "") {
                ctx.fillStyle = "rgba(255,255,0,0.5)"
            }
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
        if(!(this.game.xWon || this.game.oWon || this.game.tie)) { 
            ctx.fillStyle = "rgb(0,0,0)"
        } else if(this.game.xWon || this.game.oWon || this.game.tie) {
            ctx.fillStyle = "rgba(0,0,0,0.5)"
        }
        ctx.font = "Bold 40px arial"
        let text = ctx.measureText(this.piece);
        let tWidth = text.width;
        let tHeight = text.actualBoundingBoxAscent + text.actualBoundingBoxDescent;
        ctx.fillText(this.piece, (this.x+(this.width/2)) - (tWidth/2), 
        (this.y+(this.height/2)) + (tHeight/2));
    }
}