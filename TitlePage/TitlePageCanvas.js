


function draw() {
  var ctx = document.getElementById('TitlePageCanvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0, 0, 900, 700); // clear canvas

  // Figure out what pen we wanna draw with
  ctx.fillStyle = 'rgba(70, 70, 70, 0.8)';
  ctx.strokeStyle = 'rgba(200, 200, 200, 200)';

  ctx.save();
  ctx.lineWidth = 6;
  ctx.translate(450, 250);
  drawArt(ctx);
  ctx.restore();


draw();
