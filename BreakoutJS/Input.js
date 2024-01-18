export default class Input {
    constructor(game) {
        this.game = game;
        this.mouseX;
        this.mouseY;
        this.i = 0;

        document.addEventListener("mousemove", e => {
            this.mouseX = e.pageX; this.mouseY = e.pageY;
        });

        if(this.game.isMobile) {
        }
    }
}