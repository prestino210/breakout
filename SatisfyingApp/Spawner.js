import circle from "./Circle.js"

export default class spawner {
    constructor(game) {
        this.game = game;
        this.max = this.game.maxCircles;
        this.spawnDelay = 4000;
        this.spawnTimer = Date.now();

    }

    update() {
        let currentTime = Date.now();
        let differenceTime = currentTime - this.spawnTimer;
        if(differenceTime >= this.spawnDelay) {
            let fill = this.max - this.game.circles.length;

            if(fill > 0) {
                for(let i = 0; i < fill; i++) {
                    this.game.circles.push(new circle(this.game));
                }
            }
            this.spawnTimer = Date.now();
        }
        
    }
}