export default class input {
    constructor(game) {
        this.game = game;
        this.mouseX;
        this.mouseY;
        this.touchX;
        this.touchY;
        this.mouseDown;
        this.touchDown;

        if(!this.game.isMobile) { 
            document.addEventListener("mousemove", e => {
                this.mouseX = e.pageX;
                this.mouseY = e.pageY;
            });
    
            document.addEventListener("mousedown", e => {
                if(this.game.interacting) {
                    this.mouseDown = true;
                } else if(!this.game.interacting) {
                    this.game.interacting = true;
                }
            });
    
            document.addEventListener("mouseup", e => {
                this.mouseDown = false;
            });
        } else if(this.game.isMobile) { 
            document.addEventListener("touchmove", e => {
                const touch = e.touches[0];
                this.touchX = touch.pageX;
                this.touchY = touch.pageY;
            });
    
            document.addEventListener("touchstart", e => {
                if(this.game.interacting) {
                    const touch = e.touches[0];
                    this.touchX = touch.pageX;
                    this.touchY = touch.pageY;
                    this.touchDown = true;
                } else if(!this.game.interacting) {
                    this.game.interacting = true;
                }
            });
    
            document.addEventListener("touchend", e => {
                this.touchDown = false;
            });
        }
       
    }

    


}