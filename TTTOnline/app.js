import Game from "./Game.js"

const canv = document.querySelector("canvas");
const WIDTH = canv.width = window.innerWidth;
const HEIGHT = canv.height = window.innerHeight;
const ctx = canv.getContext("2d");
const game = new Game(WIDTH, HEIGHT);

function loop() {
    ctx.fillStyle = "rgb(50,50,50)"
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    game.update();
    game.draw(ctx);

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
