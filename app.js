import Game from "./Game.js"

const Canv = document.querySelector("canvas")
const ctx = Canv.getContext("2d")
const WIDTH = Canv.width = window.innerWidth;
const HEIGHT = Canv.height = window.innerHeight;
const game = new Game(WIDTH, HEIGHT); 
const FPS = 60;

function GameLoop() {
   ctx.fillStyle = "rgb(177,177,177)";
   ctx.fillRect(0, 0, WIDTH, HEIGHT)
   game.update();
   game.draw(ctx);
}
setInterval(GameLoop, 1000/FPS);