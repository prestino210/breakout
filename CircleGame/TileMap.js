export default class TileMap {
    constructor(game) {
        this.game = game;
        
        this.tiles = [];
        this.x = 0;
        this.y = 0;
        this.size = 150;
        if(!this.game.smallMap) {
            this.maxTilesX = 50;
            this.maxTilesY = 50;
        } else if(this.game.smallMap) {
            this.maxTilesX = 10;
            this.maxTilesY = 10;
        }
        
        for(let i = 0; i < this.maxTilesY; i++) {
            for(let j = 0; j < this.maxTilesX; j++) {
                let tile = {
                    x: this.size * j,
                    y: this.size * i
                }
                this.tiles.push(tile);
            }
        }

        this.mapWidth = this.maxTilesX * this.size;
        this.mapHeight = this.maxTilesY * this.size;
    }

    update() {

    }



    draw(ctx){
        this.mapWidth = this.maxTilesX * this.size;
        this.mapHeight = this.maxTilesY * this.size;
    
        ctx.strokeStyle = "rgb(0,0,0)";
        this.tiles.length = 0;
        for(let i = 0; i < this.maxTilesY; i++) {
            for(let j = 0; j < this.maxTilesX; j++) {
                let tile = {
                    x: this.size * j,
                    y: this.size * i
                }
                this.tiles.push(tile);
            }
        }
    
        if(!this.game.lowDetail) {
            if(this.size/2 > 0) {
                this.tiles.forEach((t) => {  
                    
                    ctx.beginPath();
                    ctx.lineWidth = "1";
                    ctx.rect(this.x + t.x, this.y + t.y, this.size, this.size);
                    ctx.stroke();
                        
                    
                });
            }
        } else if(this.game.noLOD == true) {
            ctx.beginPath();
            ctx.lineWidth = "1";
            ctx.rect(this.x, this.y, this.mapWidth, this.mapHeight);
            ctx.stroke();
        }
        
    }
    
    
}

