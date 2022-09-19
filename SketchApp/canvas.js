// @ts-nocheck
const canvas = document.querySelector("#canvas");
const { width, height } = canvas;
const ctx = canvas.getContext("2d");
const gridCtx = document.querySelector("#grid").getContext("2d");
// defaults
ctx.fillStyle = "black";
ctx.font = "30px Georgia";
// history vars
let xlast = 0;
let ylast = 0;
let undoListX = [];
let undoListY = [];
let randomArt = 0;
let imgDataGame = [];
let imgDataUser = [];
var score = 0;
let example = 0;
// important stuff!!!
const dim = 8;
const unitWidth = width / dim;
const unitHeight = height / dim;
const clearTime = 5000;
document.getElementById('scoreDisp').innerHTML = "Score " + score;
//Gets coordinates and determines pixel placement, then draw pixels
function onDown(event) {
    //gets client mouse cords
    const x = event.offsetX;
    const y = event.offsetY;
    const squareX = Math.floor(x / unitWidth);
    const squareY = Math.floor(y / unitHeight);
    //Info for testing code
    console.log(x);
    console.log(y);
    console.log(undoListX[undoListX.length -1]);
    console.log(undoListY[undoListY.length -1]);
    ctx.fillRect(
        squareX * unitWidth,
        squareY * unitHeight,
        unitWidth,
        unitHeight
    );
    xlast = squareX * unitWidth;
    ylast = squareY * unitHeight;
    undoListX.push(xlast);
    undoListY.push(ylast);
}
//Removes Pixels
function remove() {
    ctx.clearRect(undoListX[undoListX.length -1], undoListY[undoListY.length -1], 100, 100);
    console.log("deleted");
    undoListX = undoListX.slice(0, -1);
    undoListY = undoListY.slice(0, -1);
}
function setColor(color) {
    ctx.fillStyle = color;
}
function clearScreen(){
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = "black";
    example = 0;
}
function checkDrawing(){
    if (example = 1){
    imgDataUser = ctx.getImageData(0, 0, width, height);
    if (JSON.stringify(imgDataGame) == JSON.stringify(imgDataUser)){
        clearScreen();
        ctx.fillText("Good Job", 400, 400);
        setTimeout(clearScreen, 500);
        score++
        document.getElementById('scoreDisp').innerHTML = "Score " + score;
    } else {
        score=0
        clearScreen();
        ctx.fillText("Ur Bad", 400, 400);
        setTimeout(clearScreen, 500);
        document.getElementById('scoreDisp').innerHTML = "Score " + score;
    }
    }
}
//draws image and removes after x seconds
function artDraw(){
    example = 1;
    clearScreen();
    randomArt = Math.floor(Math.random() * 0 + 1);
    console.log(randomArt)
    switch(randomArt) {
        case 1:
            //heart
            ctx.fillStyle = "red"
            ctx.fillRect(100,0,100,100);
            ctx.fillRect(300,0,100,100);
            ctx.fillRect(0,100,500,100);
            ctx.fillRect(0,200,500,100);
            ctx.fillRect(100,300,300,100);
            ctx.fillRect(200,400,100,100);
        break;
      }
    imgDataGame = ctx.getImageData(0, 0, width, height);
    setTimeout(clearScreen, clearTime);
    console.log(imgDataGame);
}

//Listener
canvas.addEventListener("mousedown", onDown);
//grid
gridCtx.lineWidth = 1;
// vertical lines
for (let i = unitWidth; i < width; i += unitWidth) {
    gridCtx.moveTo(i, 0);
    gridCtx.lineTo(i, height);
}
// horizontal lines
for (let i = unitHeight; i < height; i += unitHeight) {
    gridCtx.moveTo(0, i);
    gridCtx.lineTo(width, i);
}
gridCtx.stroke();
