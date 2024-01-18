import Game from "./Game.js";

//Screen setting
let canv = document.querySelector("canvas");
let ctx = canv.getContext("2d");
const WIDTH = (canv.width = window.innerWidth);
const HEIGHT = (canv.height = window.innerHeight);


//Set up the game
var game = new Game(WIDTH, HEIGHT, canv);


//Main loop; controls it all
function gameLoop() {
    ctx.fillStyle = "rgb(100, 100, 100)";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    game.update();
    game.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();

//Made by preston allen