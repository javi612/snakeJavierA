var snake;
var snakeLength;
var snakeSize;

var context;
var screenwidth;
var screenheight;

gameInitialize();
snakeIniitialize();
gameDraw();
snakeDraw();

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenwidth = window.innerWidth;
    screenheight = window.innerHeight;
    
    canvas.width = screenwidth;
    canvas.height = screenheight;
}

function gameLoop() {
    
}

function gameDraw() {
    context.fillStyle = "rgb(157, 242, 198)";
    context.fillRect(0, 0, screenwidth, screenheight);
}

function snakeInitialize() {
    snake = [];
    snakeLength = 5;
    snakeSize = 20;
    
    for(var index = 0; index < snakeLength; index++) {
        snake.push( {
            x: index,
            y: 0
        });
    }
}

function snakeDraw() {
    for(var index = 0; index < snake.length; index++) {
        context.fillStyle = "white";
        context.fillRect(snake[index].x * snakeSize, snake[index].y * snakeSize, snakeSize, snakeSize);
    }
}

function snakeUpdate() {
    
}