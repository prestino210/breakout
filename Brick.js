export default class Brick {
    constructor(game, x, y, row, color) {
        this.deleted = false;
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = this.game.bricksWidth;
        this.height = this.game.bricksWidth;
        this.color = color;
        this.row = row;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}