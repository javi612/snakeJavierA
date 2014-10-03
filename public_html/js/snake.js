var snake;

var context;
var screenwidth;
var screenheight;

gamedraw();

function gameInitialize() {
    var canvas = document.getelementbyid("game-screen");
    context = canvas.getcontext("2d");
    
    screenwidth = window.innerWidth;
    screenheight =window.innerHeight;
    
    canvas.width = screenwidth;
    canvas.height = screenheight;
}

function gameloop() {
    
}

function gamedraw() {
    context.fillstyle = "rgb(157, 242, 198)";
    context.rect(0, 0, screenwidth, screenheight);
}