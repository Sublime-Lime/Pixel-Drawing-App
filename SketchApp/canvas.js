// @ts-nocheck
const canvas = document.querySelector("#canvas");
const { width, height } = canvas;
const ctx = canvas.getContext("2d");
const gridCtx = document.querySelector("#grid").getContext("2d");
// default color
ctx.fillStyle = "black";
// history vars
let xlast = 0;
let ylast = 0;
// important stuff!!!
const dim = 5;
const unitWidth = width / dim;
const unitHeight = height / dim;
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
    console.log(square);
    console.log(xlast);
    console.log(ylast);
    ctx.fillRect(
        squareX * unitWidth,
        squareY * unitHeight,
        unitWidth,
        unitHeight
    );
    xlast = squareX * unitWidth;
    ylast = squareY * unitHeight;
}
//Removes Pixels
function remove() {
    ctx.clearRect(xlast, ylast, 100, 100);
    console.log("deleted");
}
function setColor(color) {
    ctx.fillStyle = color;
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
