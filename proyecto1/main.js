var points = 80;

localStorage.setItem("player1", points);

points = 0;

setTimeout(()=>{
    points = 40
    localStorage.setItem("player2", points);
}, 2000)

var player1 = localStorage.getItem("player1");
var player2 = localStorage.getItem("player2");

console.log(player1 > player2 ? "Gano el 1": "Gano el 2")

localStorage.clear();