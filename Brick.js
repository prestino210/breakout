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
        this.health = (2 - row) + 1;
    }

    draw(ctx) {
        this.color = this.game.colors[(2 - this.health) + 1];
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}