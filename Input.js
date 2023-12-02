export default class Input {
    constructor() {
        this.mouseX;
        this.mouseY;

        document.addEventListener("mousemove", e => {
            this.mouseX = e.pageX; this.mouseY = e.pageY;
        });
    }
}