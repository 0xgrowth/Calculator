// THE FIRST INPUT BOX
function changeOnep(x) {    
    x.style.background = "grey";
}  
  function nochangeOnep(x) {
    x.style.background = "white";
  }  

// THE SECOND INPUT BOX

function changeTwop(x) {    
    x.style.background = "grey";
}  
  function nochangeTwop(x) {
    x.style.background = "white";
  }  

// FOR THE SUBTRACTION ----------------------------------------------------------------------

function changeSubt(x) {    
    x.style.background = "grey";
    // Below onclick is added
    // added the onclick event inside the onmouseover event because there's no other way known to me atm
    let t = document.getElementById("subt");
    t.onclick = calcRes;
 function calcRes() {
  let y = document.getElementById("onep").value;
  let z = document.getElementById("twop").value;
  let u = y-z
  document.getElementById("dasp").innerHTML = "=" + u; 
  }  
}
  function nochangeSubt(x) {
    x.style.background = "white";
  }  

  // FOR THE ADDITION ----------------------------------------------------------------------

function changePlus(x) {    
  x.style.background = "grey";
  // Below onclick is added
  // added the onclick event inside the onmouseover event because there's no other way known to me atm

  let t = document.getElementById("plust");
  t.onclick = calcPlus;
    function calcRes(y,z) {
      return parseInt(y) + parseInt(z);
    }

    function calcPlus() {
      let y = document.getElementById("onep").value;
      let z = document.getElementById("twop").value;
      var u = calcRes(y,z);
      document.getElementById("dasp").innerHTML = "=" + u; 
    }
}

function nochangePlus(x) {
  x.style.background = "white";
}  

// FOR THE MULTIPLICATION ----------------------------------------------------------------------

function changeMult(x) {    
  x.style.background = "grey";
  // Below onclick is added
  // added the onclick event inside the onmouseover event because there's no other way known to me atm
  let t = document.getElementById("mult");
  t.onclick = calcRes;
    function calcRes() {
    let y = document.getElementById("onep").value;
    let z = document.getElementById("twop").value;
    let u = y*z
    document.getElementById("dasp").innerHTML = "=" + u; 
      }  
    }
  function nochangeMult(x) {
      x.style.background = "white";
}  

// FOR THE PERCENTAGE ----------------------------------------------------------------------

function changePerc(x) {    
  x.style.background = "grey";
  // Below onclick is added
  // added the onclick event inside the onmouseover event because there's no other way known to me atm
  let t = document.getElementById("perc");
  t.onclick = calcRes;
    function calcRes() {
    let y = document.getElementById("onep").value;
    // let z = document.getElementById("twop").value;
    let u = y/100
    document.getElementById("dasp").innerHTML = "=" + u; 
      }   
 }
    function nochangePerc(x) {
       x.style.background = "white";
}  

// FOR THE DIVISION ----------------------------------------------------------------------

function changeDivi(x) {    
  x.style.background = "grey";
  // Below onclick is added
  // added the onclick event inside the onmouseover event because there's no other way known to me atm
  let t = document.getElementById("divi");
  t.onclick = calcRes;
function calcRes() {
let y = document.getElementById("onep").value;
let z = document.getElementById("twop").value;
let u = y/z
document.getElementById("dasp").innerHTML = "=" + u; 
  }  
}
function nochangeDivi(x) {
  x.style.background = "white";
}  

// FOR THE 1/x ----------------------------------------------------------------------

function changeVidi(x) {    
  x.style.background = "grey";
  // Below onclick is added
  // added the onclick event inside the onmouseover event because there's no other way known to me atm
  let t = document.getElementById("vidi");
  t.onclick = calcRes;
    function calcRes() {
    let y = document.getElementById("onep").value;
    // let z = document.getElementById("twop").value;
    let u = 1/y
    document.getElementById("dasp").innerHTML = "=" + u; 
      }  
    }
  function nochangeVidi(x) {
    x.style.background = "white";
}  

// THE CLEAR Function

function changeClear(x) {    
  x.style.background = "grey";
  // Below onclick is added
  // added the onclick event inside the onmouseover event because there's no other way known to me atm
  let t = document.getElementById("clear");
  t.onclick = myReset;
  function myReset() {
    /* Resets rESULT except input numbers*/
    document.getElementById("dasp").innerHTML = " ";
  }
    }
  function nochangeClear(x) {
    x.style.background = "white";
}  

// THE Change Theme Function

function changeEqua(x) {    
  x.style.background = "grey";
  // Below onclick is added
  // added the onclick event inside the onmouseover event because there's no other way known to me atm
  var p = document.getElementById("piss");
  var c = document.getElementById("calc");
  let t = document.getElementById("equa");

   var times = 0
   var one = function() {
    p.style.background = "#a38c60";
    c.style.background = "#f3d75c"; //yellow
   } 

  //  var two = function() {
  //   p.style.background = "#553030";
  //   c.style.background = "red";
  //  }

   var three = function() {
    p.style.background = "lightblue";
    c.style.background = "#5bf3f3"; //blue 
   }

   var four = function() {
    p.style.background = "#9322f0";
    c.style.background = "#c0c0c0";  //silver
   }

  t.onclick = myReset;
  function myReset() {
    /* Changes the colors of the rectangles */
    if (times < 3) {
       one();
       times++;
       if (times < 2) {
         three();
         times++;
       }
    }
    else {
      four();
    }
  }
}
  function nochangeEqua(x) {
    x.style.background = "white";
}  
