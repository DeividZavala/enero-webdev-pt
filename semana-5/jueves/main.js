var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


class Mario{

    constructor(name){
        this.name = name;
        this.image1 = new Image();
        this.image1.src = 'https://bit.ly/2L7yH3f'
        this.image2 = new Image();
        this.image2.src = 'https://bit.ly/2L3ikoe';
        this.image = this.image1;
        this.x = 10;
        this.y = 223;
        this.width = 70;
        this.height = 90;
    }


    collision(item){
        return (this.x < item.x + item.width) &&
            (this.x + this.width > item.x) &&
            (this.y < item.y + item.height) &&
            (this.y + this.height > item.y);
    }
    
    draw(){
        if(this.y < 223) this.y += 6;
        if(frames % 10 === 0){
            this.image = this.image === this.image1 ? this.image2 : this.image1;
        }
        ctx.drawImage(this.image, this.x,this.y, this.width, this.height);
    }

}

class Background{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image = new Image();
        this.image.src = 'https://bit.ly/2TQwFIY';
    }

    gameOver(){
        clearInterval(interval);

        ctx.font = "30px Avenir";
        ctx.fillText("Game Over", 250, 190);

    }

    draw(){
        this.x--;
        if(this.x < -canvas.width) this.x = 0;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);

        ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }

}

class Enemy{
    constructor(){
        //de principio el enemigo aparece fuera del canvas
        this.x = canvas.width;
        //el y del enemigo es el mismo de mario
        this.y = 223;
        this.width = 70;
        this.height = 90;
        this.image = new Image();
        this.image.src = "https://bit.ly/2BAISL4";
    }

    draw(){
        if(frames % 10) this.x -= 5;
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

}

var mario = new Mario("david");
var background = new Background();

var enemies = [];
function generateEnemies(){
    if(frames % 60 == 0 || frames % 100 == 0 || frames % 170 == 0){
        let enemy = new Enemy();
        enemies.push(enemy);
    }
}

function drawEnemies(){
    enemies.forEach( (enemy, index) => {
        if(enemy.x < -canvas.width) enemies.splice(index, 1)
        enemy.draw();
        if(mario.collision(enemy)){
            console.log("Perdiste mijo")
            background.gameOver();
        }
    })
}

var frames = 0;
var interval = setInterval(function(){
    frames++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background.draw();
    mario.draw();
    generateEnemies();
    drawEnemies();

}, 1000/60);

addEventListener("keydown", function(event){
    if(event.keyCode === 32){
        mario.y -= 80;
    }
})