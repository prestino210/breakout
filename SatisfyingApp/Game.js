import circle from "./Circle.js" 
import input from "./Input.js"
import spawner from "./Spawner.js"
import Dragger from "./Dragger.js"

export default class Game {
    
    constructor(WIDTH, HEIGHT) {
        this.screenWidth = WIDTH;
        this.screenHeight = HEIGHT
        this.maxCircles = 200;
        this.x = 0;
        this.y = 0;
        this.width = 1912;
        this.height = 924;
        this.soundCache = 0;
        this.maxSounds = 50;
        this.sfxVolume = 0;
        this.musicVol = 0;
        this.dragger = null;
        this.interacting = false;

        this.isMobile = /Mobile/.test(navigator.userAgent);

        this.input = new input(this);
        this.circleSpawner = new spawner(this);
        this.circles = [];
        this.particles = [];

        for(let i = 0; i < this.maxCircles; i++) {
            let c = new circle(this);
            this.circles.push(c);
        }

        if(this.isMobile) { 
            this.dragger = new Dragger(this);
        }
    }


    update() { 
        if(this.isMobile) {
            this.dragger.update();
            this.input.mouseX = this.dragger.drX;
            this.input.mouseY = this.dragger.drY;
            this.input.mouseDown = this.dragger.triggerDown;
        }

        this.circles = this.circles.filter(c => !c.deleted);
        this.particles = this.particles.filter(p => !p.deleted);

        this.circles.forEach(c => {
            c.update();
        });

        this.particles.forEach(p => {
            p.update();
        });

        this.circleSpawner.update();
        
    }

    draw(ctx) {
        this.circles.forEach(c => {
            c.draw(ctx);
        });

        this.particles.forEach(p => {
            p.draw(ctx);
        });

        if(this.isMobile) {
            this.dragger.draw(ctx);
        }

        if(!this.interacting) { 
            ctx.fillStyle = "rgba(0,0,0,0.5)"
            ctx.fillRect(0, 0, this.screenWidth, this.screenHeight);
            let txt = "Tap or click screen to interact";
            ctx.fillStyle = "rgb(200,200,200)"
            ctx.font = `Bold 25px arial`
            let text = ctx.measureText(txt);
            let tWidth = text.width;
            let tHeight = text.actualBoundingBoxAscent + text.actualBoundingBoxDescent;
            ctx.fillText(txt, (this.screenWidth/2) - (tWidth/2), 
            (this.screenHeight/2) + (tHeight/2));
        }
    }

    playMusic(st, vol) {
        var audio = new Audio(`./sounds/music/${st}`);
        if(vol + this.musicVol > 0) {
            audio.volume = vol + this.musicVol;
        } else {
            audio.volume = 0
        }
        audio.play().catch(error => {
            if (error.name === 'NotAllowedError') {
                // Autoplay not allowed, ignore error
            }
        });
    }

    soundEffect(sfx, vol) {
        var audio = new Audio(`./sounds/${sfx}`);
        if(vol + this.sfxVolume > 0) {
            audio.volume = vol + this.musicVol;
        } else {
            audio.volume = 0
        }
        audio.addEventListener('ended', () => {
            this.soundCache--;
        });
        audio.play().catch(error => {
            if (error.name === 'NotAllowedError') {
                // Autoplay not allowed, ignore error
            }
        });
    }

}