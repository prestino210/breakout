import Game from "./Game.js";

const canv = document.querySelector("canvas")
const ctx = canv.getContext("2d")
const WIDTH = canv.width = window.innerWidth;
const HEIGHT = canv.height = window.innerHeight;
const game = new Game(WIDTH, HEIGHT);
const FPS = 60;
const bgColor = "rgb(100, 100, 100)";

function animate() {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    game.update();
    game.draw(ctx);
}

setInterval(animate, 1000/FPS);
