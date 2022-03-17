
var counter=1;

let  student1 = new Student ("Rufinus Sadaf", 3.7, false, false, false, "white", true, "student1.jpeg");
let student2= new Student ("Amdado Maxwell", 3.78, false, false, false, "black", true, "student2.jpeg");
let student3= new Student ("Brandon McCormick", 3.56, true, false, true, "white", true, "student3.jpeg");
let student4= new Student ("Eusbio Villegas", 3.85, false, false, false, "hispanic", true, "student4.jpeg");
let student5= new Student ("FangFang Zhe", 3.68, true, false, false, "asian", false, "student5.jpeg");
let student6 = new Student ("Stacey Daniel", 3.67, false, true, false, "white", true, "student6.jpeg");
var array = [student1, student2, student3, student4, student5, student6];

function nextPerson(currentPerson)
{
  var accept= document.getElementById("accept");
  var decline= document.getElementById("decline");
  accept.addEventListener("click",function(){currentPerson.show(array[counter].getImage()); currentPerson.updateQuotas(); console.log("hit")});
  decline.addEventListener("click", function(){currentPerson.show(array[counter].getImage())});
  counter++;

}

function win(){
  if (legInnerHtml >= 2 && counter==6){
    alert("you won");
  }
  else if (counter==6){
    alert("you lose");
  }
}

nextPerson(student1);


/**
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
*/

//}

//const cc = new CollisionChecker(this.canvas);
