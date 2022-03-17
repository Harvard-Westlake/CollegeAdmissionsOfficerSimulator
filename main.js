var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var pixelData;


Student student1 = new Student ("Rufinus Sadaf", 3.7, false, false, false, "french", true, "Rufinius.jpeg");
Student student2= new Student ("John Doe", "4.0", false, true, false, "white", false, "Doe.jpeg");
Student student3= new Student ("Sleeping Beauty", "3.2", true, false, true, "asian", false, "Sleeping.jpeg");
Student student4= new Student ("Tom Cruz", 3.5, false, false, true, "white", true, "Cruz.jpeg");
Student student5= new Student ("Dylan Smith", 3.9, true, false, false, "black", false, "Smith.jpeg");
var array = [student1, student2, student3, student4, student5];

function nextPerson(currentPerson)
{
  var counter=1;
  var accept= document.getElementById("accept");
  var decline= document.getElementById("decline");
  accept.addEventListener("click",function(){currentPerson.change(array[counter]); currentPerson.updateQuotas()});
  decline.addEventListner("click", function(){currentPerson.change(array[counter]);});
  counter++;

}



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
