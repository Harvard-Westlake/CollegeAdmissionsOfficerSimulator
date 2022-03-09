var canvas= document.getElementById("game");
var ctx = canvas.getContext("2d");


function draw(){
ctx.clearRect(0,0, canvas.width, canvas.height);
var myImg = document.getElementById("start");
ctx.drawImage(myImg,0,0,1200,800);
window.requestAnimationFrame(draw);
};

draw();
