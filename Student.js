class Student {


  constructor(name, gpa, legacy, requiresAid, donor, race, isAthlete){
    this.name= name;
    this.gpa= gpa;
    this.legacy= legacy;
    this. requiresAid= requiresAid;
    this.race=race;
    this.isAthlete= isAthlete;
    this.accept = document.getElementById("accept");
    this.reject = document.getElementById("reject");

  }

function updateQuotas(){
  if (this.legacy){
    var legacyQuota = document.getElementById("legacyQuo");
    let legInnerTxt = legacyQuota.innerText.split();//an array
    legacyQuota.innerHTML += (legInnerTxt[1]+1);
  }
  //diversityQuo
  if (this.race != "white"){
    var diversityQuota = document.getElementById("diversityQuo");
    let divInnerTxt = diversityQuota.innerText.split();//an array
    diversityQuota.innerHTML += (divInnerTxt[1]+1);
  }
  //sportsqou
  if (this.isAthlete){
    var sportsQuota = document.getElementById("sportsQuo");
    let sportsInnerTxt = sportsQuota.innerText.split();//an array
    sportsQuota.innerHTML += (sportsInnerTxt[1]+1);
  }


  if(this.gpa >= 3.9){
    var gpaQuota = document.getElementById("gpaQuo");
    let gpaInnerTxt = gpaQuota.innerText.split();
    gpaQuota.innerHTML += (gpaInnerTxt[1]+1);
  }
  //wealthQuo

  if(this.donor){
    var wealthQuota = document.getElementById("wealthQuo");
    let wealthInnerTxt = wealthQuota.innerText.split();
    wealthQuota.innerHTML += (wealthInnerTxt[1]+1);
  }

  if(this.requiresAid){
    //if requores financial aid wealth goes down one
    var wealthQuota = document.getElementById("wealthQuo");
    let wealthInnerTxt = wealthQuota.innerText.split();
    wealthQuota.innerHTML += (wealthInnerTxt[1]-1);
  }

}



}
