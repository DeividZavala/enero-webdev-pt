var canvas = document.getElementById("perro") 
var ctx = canvas.getContext("2d");
var pipes = [];
var frames = 0;
var gravity = 2;
var interval;
var score = 0;


/*class Item{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this.width = width;
        this.height = height
    }
}

class Perro extends Item{
    constructor(){
        super(20,40, 30, 30)
    }
}

*/



class Flappy {
    constructor(){
        this.x = 20;
        this.y = 40;
        this.width = 30;
        this.height = 30;
        this.image = new Image();
        this.image.src = "./images/flappy.png"
    }

    collision(item){
        return  (this.x < item.x + item.width) &&
                (this.x + this.width > item.x) &&
                (this.y < item.y + item.height) &&
                (this.y + this.height > item.y);
    }

    rise(){
        this.y -= 60;
    }

    draw(){
        if(this.y < canvas.height - 30) this.y += gravity;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}

class Pipe{

    constructor(pos, y, height){
        this.x = canvas.width;
        this.y = y;
        this.width = 30;
        this.height = height;
        this.image = new Image();
        this.image.src = pos === "top" ? "./images/obstacle_top.png" : "./images/obstacle_bottom.png"
    }

    draw(){
        this.x -= 3;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}

class Background{

    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = "./images/bg.png";
    }


    gameOver(){
        ctx.font = "40px Avenir"
        ctx.fillText("Game Over", 300, 190);
        ctx.font = "20px Avenir"
        ctx.fillText("Press 'esc' to play again", 300, 230);
        clearInterval(interval);
        interval = undefined;
    }

    draw(){
        this.x--
        if(this.x < -canvas.width) this.x = 0;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.image, this.x + canvas.width, this.y, this.width, this.height);
    }

}

var flappy = new Flappy();
var fondo = new Background();

function generatePipes(){
    if(!(frames % 60 === 0)) return;
    let height = Math.floor((Math.random() * canvas.height * .6) + 30)
    let pipe1 = new Pipe("top", 0, height);
    let pipe2 = new Pipe(null, height + 120, canvas.height - 120 - height);
    pipes.push(pipe1);
    pipes.push(pipe2);
}

function drawPipes(){
    pipes.forEach( (pipe, index) => {
        if(pipe.x < -30) {
            score++
            return pipes.splice(index, 1);
        }
        pipe.draw();
        if(flappy.collision(pipe)){
            fondo.gameOver();
        }
    })
}

function update(){
    frames++
    ctx.clearRect(0,0, canvas.width, canvas.heigth);
    fondo.draw();
    generatePipes();
    drawPipes();
    flappy.draw();
    ctx.font = "30px Avenir"
    ctx.fillText(score, 10, 30);
    
}

function start(){
    interval = setInterval(update, 1000/60);
}

function restart(){
    if(interval !== undefined) return;
    score = 0;
    frames = 0;
    interval = undefined;
    pipes = [];
    start();
}


addEventListener("keydown", function(e){
    if(e.keyCode === 32){
        flappy.rise();
    }
    if(e.keyCode === 27){
        restart();
    }
})

start();