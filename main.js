var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var pixelData;



function draw(){
ctx.clearRect(0,0, canvas.width, canvas.height);
var myImg = document.getElementById("start");
ctx.drawImage(myImg,0,0,1200,800);
window.requestAnimationFrame(draw);
};

draw();


class CollisionChecker {
  constructor(canvasElement) {
    let clicked = false;
      this._test = true;
      if (this._test) {
        this._test_logMouseMovement();
      }

      this.typeOfGameElement = {
        nothing : "nothing",
        button : "button"
      }
  }

  checkPixelType(pixelX, pixelY) {

    // How did I figure this out?  Stolen from: https://bfy.tw/SbUU
    pixelData = canvas.getContext('2d').getImageData(pixelX, pixelY, 1, 1).data;

    // If (this.test) is set to TRUE (in the constructor), log details
    if (this._test) {
      this._test_logTestData(pixelData);
    }


    if (pixelData) {
      // Check if wall
      if (this.isButton(pixelData)) {
        return this.typeOfGameElement.button;
      }
    }
  }

  // Checks if its a wall (assumed RGB values are 255,255,255)
  isButton(pixelData) {
    if (pixelData[0] == '156' && pixelData[1] == '176' && pixelData[2] == '123' && pixelData[3] == '255') {
      // console.log('clicking button');
      // this.clicked = true;
    }
    // this.clicked = false;
  }



  _test_logMouseMovement() {
    let self = this;
    canvas.addEventListener("click", e => {
      self.checkPixelType(e.offsetX, e.offsetY);
    });


  }

  _test_logTestData(pixelData) {
    if (pixelData) {
      console.log('R: ' + pixelData[0]);
      console.log('G: ' + pixelData[1]);
      console.log('B: ' + pixelData[2]);
      console.log('A: ' + pixelData[3]);
      if (pixelData[0] == '156' && pixelData[1] == '176' && pixelData[2] == '123' && pixelData[3] == '255') {
        console.log("buttonclicked");
        return true;


      }
      return false;

    }

  }

}


const cc = new CollisionChecker(this.canvas);
