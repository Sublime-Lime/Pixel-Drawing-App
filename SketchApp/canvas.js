    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");
    canvas.style = "position:absolute; left: 0; top: 37; z-index: 0;";
    const ctx2 = document.querySelector("#grid").getContext('2d');
    //default color
    ctx.fillStyle = 'black';
    //Var
    let x = 0
    let y = 0
    let square = 0
    let xlast = 0
    let ylast = 0
    //Draws Pixels
    function mdown(z) {
        //Info for testing code
        console.log(x);
        console.log(y);
        console.log(square);
        console.log(xlast);
        console.log(ylast);
        switch(square){
            case 1:
            ctx.fillRect(0, 0, 100, 100);
            xlast = 0
            ylast = 0
            break;
            case 2:
            ctx.fillRect(100, 0, 100, 100);
            xlast = 100
            ylast = 0
            break;
            case 3:
            ctx.fillRect(200, 0, 100, 100);
            xlast = 200
            ylast = 0
            break;
            case 4:
            ctx.fillRect(300, 0, 100, 100);
            xlast = 200
            ylast = 0
            break;
            case 5:
            ctx.fillRect(400, 0, 100, 100);
            xlast = 400
            ylast = 0
            break;
            case 6:
            ctx.fillRect(0, 100, 100, 100);
            xlast = 0
            ylast = 100
            break;
            case 7:
            ctx.fillRect(100, 100, 100, 100);
            xlast = 100
            ylast = 100
            break;
            case 8:
            ctx.fillRect(200, 100, 100, 100);
            xlast = 200
            ylast = 100
            break;
            case 9:
            ctx.fillRect(300, 100, 100, 100);
            xlast = 300
            ylast = 100
            break;
            case 10:
            ctx.fillRect(400, 100, 100, 100);
            xlast = 400
            ylast = 100
            break;
            case 11:
            ctx.fillRect(0, 200, 100, 100);
            xlast = 0
            ylast = 200
            break;
            case 12:
            ctx.fillRect(100, 200, 100, 100);
            xlast = 100
            ylast = 200
            break;
            case 13:
            ctx.fillRect(200, 200, 100, 100);
            xlast = 200
            ylast = 200
            break;
            case 14:
            ctx.fillRect(300, 200, 100, 100);
            xlast = 300
            ylast = 200
            break;
            case 15:
            ctx.fillRect(400, 200, 100, 100);
            xlast = 400
            ylast = 200
            break;
            case 16:
            ctx.fillRect(0, 300, 100, 100);
            xlast = 0
            ylast = 300
            break;
            case 17:
            ctx.fillRect(100, 300, 100, 100);
            xlast = 100
            ylast = 300
            break;
            case 18:
            ctx.fillRect(200, 300, 100, 100);
            xlast = 200
            ylast = 300
            break;
            case 19:
            ctx.fillRect(300, 300, 100, 100);
            xlast = 300
            ylast = 300
            break;
            case 20:
            ctx.fillRect(400, 300, 100, 100);
            xlast = 400
            ylast = 300
            break;
            case 21:
            ctx.fillRect(0, 400, 100, 100);
            xlast = 0
            ylast = 400
            break;
            case 22:
            ctx.fillRect(100, 400, 100, 100);
            xlast = 100
            ylast = 400
            break;
            case 23:
            ctx.fillRect(200, 400, 100, 100);
            xlast = 200
            ylast = 400
            break;
            case 24:
            ctx.fillRect(300, 400, 100, 100);
            xlast = 300
            ylast = 400
            break;
            case 25:
            ctx.fillRect(400, 400, 100, 100);
            xlast = 400
            ylast = 400
            break;
        }
    }
    //Gets coordinates and determines pixel placement
    function draw(z) {
        //gets client mouse cords
        x=z.clientX;
        y=z.clientY;
        //Math to determine square from cords
        square = (((Math.floor((y-37)/100))*5)+(Math.floor(x/100))+1)
    }
    //Removes Pixels
    function remove(){
        ctx.clearRect(xlast, ylast, 100, 100)
        console.log("deleted");
    }
    function black(){
        ctx.fillStyle = 'black';
    }
    function blue(){
        ctx.fillStyle = 'blue';
    }
    function red(){
        ctx.fillStyle = 'red';
    }
    function orange(){
        ctx.fillStyle = 'orange';
    }
    function green(){
        ctx.fillStyle = 'green';
    }
    function yellow(){
        ctx.fillStyle = 'yellow';
    }
    function purple(){
        ctx.fillStyle = 'purple';
    }
    //Listener
    canvas.addEventListener('mousedown', mdown);
    canvas.addEventListener('mousemove', draw);
    //grid
    ctx2.lineWidth = 1;
    ctx2.moveTo(0,100);
    ctx2.lineTo(500,100);
    ctx2.moveTo(0,200);
    ctx2.lineTo(500,200);
    ctx2.moveTo(0,300);
    ctx2.lineTo(500,300);
    ctx2.moveTo(0,400);
    ctx2.lineTo(500,400);
    ctx2.moveTo(100,0);
    ctx2.lineTo(100,500);
    ctx2.moveTo(200,0);
    ctx2.lineTo(200,500);
    ctx2.moveTo(300,0);
    ctx2.lineTo(300,500);
    ctx2.moveTo(400,0);
    ctx2.lineTo(400,500);
    ctx2.stroke();