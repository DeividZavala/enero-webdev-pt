var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


ctx.fillRect(50,50, 100, 100);

ctx.strokeRect(25, 25, 150, 150);

ctx.clearRect(75,75, 50, 50)

ctx.rect(88, 88, 25, 25);
ctx.stroke();

ctx.rect(93,93, 15,15)
ctx.fill()

ctx.clearRect(0,0, 200, 200)

function roundedRect(ctx, x=12, y=12, width=150, height=50, radius=15) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.lineTo(x + width - radius, y + height);
    ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    ctx.lineTo(x + width, y + radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.lineTo(x + radius, y);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
    ctx.fillStyle = "orange"
    ctx.fill()
  }


  roundedRect(ctx, 12, 12, 150, 150, 15);


  ctx.beginPath();
  ctx.fillStyle ="#fff";
  ctx.arc(40, 135, 20, 0, Math.PI*2)
  ctx.fill();


  ctx.beginPath();
  ctx.lineCap = "round";
  ctx.lineWidth = 20
  ctx.strokeStyle = "#fff"
  ctx.arc(30, 150, 70, 0, Math.PI*1.5, true);
  ctx.stroke();


  ctx.beginPath();
  ctx.arc(30, 150, 110, 0, Math.PI*1.5, true);
  ctx.stroke()

  ctx.fillStyle = "black";
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1
  ctx.font = "20px Roboto"
  ctx.strokeText("ay mijo te salio", 30, 185)


  ctx.clearRect(0,0,200,200)


  let img = new Image();
  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKjAJWIGsPXjeArOuPrMoeGfhJVXqTtv7l1-zxW1zaIz8exZnc"
  img.onload = function(){
    ctx.drawImage(img, 20, 20, 150, 100);
  }

