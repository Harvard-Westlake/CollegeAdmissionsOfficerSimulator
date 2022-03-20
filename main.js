
let  student1 = new Student ("Rufinus Sadaf", 3.7, false, false, false, "white", true, "student1.jpeg"); // intializeing five students
let student2= new Student ("Amdado Maxwell", 3.78, false, false, false, "black", true, "student2.jpeg");
let student3= new Student ("Brandon McCormick", 3.56, true, false, true, "white", true, "student3.jpeg");
let student4= new Student ("Eusbio Villegas", 3.85, false, false, false, "hispanic", true, "student4.jpeg");
let student5= new Student ("FangFang Zhe", 3.68, true, false, false, "asian", false, "student5.jpeg");
let student6 = new Student ("Stacey Daniel", 3.67, false, true, false, "white", true, "student6.jpeg");
var counter=0;
var numclicked=0;
  var accept1= document.getElementById("accept1");
  var decline1= document.getElementById("decline1");
  var accept2= document.getElementById("accept2");
  var decline2= document.getElementById("decline2");
  var accept3= document.getElementById("accept3");
  var decline3= document.getElementById("decline3");
  var accept4= document.getElementById("accept4");
  var decline4= document.getElementById("decline4");
  var accept5= document.getElementById("accept5");
  var decline5= document.getElementById("decline5");
  var accept6= document.getElementById("accept6");
  var decline6= document.getElementById("decline6");

  function updateLegacy(student){
  if (student.getLegacy()==true){
    counter++;
  }
  }

  function updateClick(){
    numclicked++;

  }


  accept1.addEventListener("click",function(){updateLegacy(student1); updateClick()});
  decline1.addEventListener("click",function(){updateClick()});
  accept2.addEventListener("click",function(){updateLegacy(student2); updateClick()});
  decline2.addEventListener("click",function(){updateClick()});
  accept3.addEventListener("click",function(){updateLegacy(student3); updateClick()});
  decline3.addEventListener("click",function(){updateClick()});
  accept4.addEventListener("click",function(){updateLegacy(student4); updateClick()});
  decline4.addEventListener("click",function(){updateClick()});
  accept5.addEventListener("click",function(){updateLegacy(student5); updateClick()});
  decline5.addEventListener("click",function(){updateClick()});
  accept6.addEventListener("click",function(){updateLegacy(student6);updateClick(); win()});
  decline6.addEventListener("click",function(){updateClick(); win()});


function win(){
  if (numclicked==6 && counter==2){
    alert("you win");
  }
  else if (numclicked==6){
    alert("you lose");
  }


}





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
