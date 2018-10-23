function onDocumentReady() {
  let el = document.body;

  el.addEventListener('pointerup', onPointerUp);
  el.addEventListener('pointerdown', onPointerDown);
  el.addEventListener('pointermove', onPointerMove);
  el.addEventListener('pointerleave', onPointerLeave);

  // prevent default gestures in iOS
  el.addEventListener('gesturestart', e => e.preventDefault());
  el.addEventListener('gesturechange', e => e.preventDefault());
  el.addEventListener('gestureend', e => e.preventDefault());

  el = document.getElementById("data");
  // prevent default gestures in iOS
  el.addEventListener('gesturestart', e => e.preventDefault());
  el.addEventListener('gesturechange', e => e.preventDefault());
  el.addEventListener('gestureend', e => e.preventDefault());


  setInterval(() => {
    displayData();
  }, 100)

}
var abspeed = 0;
var pointNum = 0;

function displayData () {
  let g = pointers.createPointerGroupings();
  let text = "";
  if (pointers.numOfPointers > 1) 
    var { distance, isApproaching } = pointers.comparePointers(pointers.pointerIds[0], pointers.pointerIds[1]);      
  
  if (g.numOfGroupings > 0) {
    let pg = g.groupings[0];


    text ="Moving up: " + pg.isMovingUp + "<br/>" +
          "Moving left: " + pg.isMovingLeft + "<br/>" +  
          "Number of groupings: " + g.numOfGroupings + "<br/>" +
          "Horizontal speed: " + Math.round(pg.horizontalSpeed)+"<br/>"   +
          "Vertical speed: " + Math.round(pg.verticalSpeed)+"<br/>"  +
          "Absolut speed: " + Math.round(pg.speed)+"<br/>" +
          "Num of pointers: " + pointers.numOfPointers + "<br/>"+
          "Distance between 1. & 2. pointers: " + distance + "<br/>" +
          "Pointer 1 & 2 approaching: " + isApproaching;
          abspeed = Math.round(pg.speed);
          pointNum = pointers.numOfPointers;
  } 
  document.getElementById("data").innerHTML = text;
}

function onPointerUp(e) {
  pointers.removePointer(e.pointerId);
  let el = getOrCreate(e);
  el.classList.remove('down');
}

function onPointerDown(e) {
  e.preventDefault();
  pointers.updatePointer(e);
}

function onPointerLeave(e) {
  pointers.removePointer(e.pointerId);
  e.preventDefault();
  let el = getOrCreate(e);
  document.body.removeChild(el);
}

function onPointerMove(e) {
   pointers.updatePointer(e);  
   let el = getOrCreate(e);
   let hs = pointers.getPointer(e.pointerId).absoluteSpeed;
   if(hs>100){
    document.getElementById("pointer").style.backgroundColor = "green";
   }

   e.preventDefault();

  // Position the element from its middle
  let rect = el.getBoundingClientRect();
  el.style.left = (e.clientX-rect.width/2) + 'px';
  el.style.top = (e.clientY-rect.height/2) + 'px';
}

// Returns an existing element for a pointer id, or makes a new one
function getOrCreate(evt) {
  const id = 'pointer-' + evt.pointerId;
  let el = document.getElementById(id);
  if (el) return el;
  el = document.createElement('div');
  el.classList.add('pointer');
  // prevent default gestures in iOS
  el.addEventListener('gesturestart', e => e.preventDefault());
  el.addEventListener('gesturechange', e => e.preventDefault());
  el.addEventListener('gestureend', e => e.preventDefault());


  el.id = id;
  document.body.appendChild(el);
  return el;
}



if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);

/*

toggle = document.querySelectorAll(".toggle")[0];
nav = document.querySelectorAll("nav")[0];
toggle_open_text = 'Menu';
toggle_close_text = 'Close';

toggle.addEventListener('click', function() {
	nav.classList.toggle('open');
	
  if (nav.classList.contains('open')) {
    toggle.innerHTML = toggle_close_text;
  } else {
    toggle.innerHTML = toggle_open_text;
  }
}, false);


*/


document.getElementById("discDiv").addEventListener("pointermove", numPointFunc);

function numPointFunc(){
if( pointNum == 5){
  rotatel1();
} else if(pointNum == 4){
  rotatel2();
} else if(pointNum == 3){
  rotatel3();
} else if(pointNum == 2){
  rotatel4();
} else if (pointNum == 1){
  rotatel5();
} else{
  //lol
}
}

/*
document.getElementById("disc5").addEventListener("pointermove", rotatel5);
document.getElementById("disc4").addEventListener("pointermove", rotatel4);
document.getElementById("disc3").addEventListener("pointermove", rotatel3);
document.getElementById("disc2").addEventListener("pointermove", rotatel2);
document.getElementById("disc1").addEventListener("pointermove", rotatel1);
*/

var degree5 = 0;
function rotatel5(){
console.log(abspeed);
degree5+=abspeed/200;
document.getElementById("disc5").style.transform = "rotate("+degree5+"deg)";
}

var degree4 = 0;
function rotatel4(){
console.log(abspeed);
degree4+=abspeed/400;
document.getElementById("disc4").style.transform = "rotate("+degree4+"deg)";
}

var degree3 = 0;
function rotatel3(){
console.log(abspeed);
degree3+=abspeed/800;
document.getElementById("disc3").style.transform = "rotate("+degree3+"deg)";
}

var degree2 = 0;
function rotatel2(){
console.log(abspeed);
degree2+=abspeed/1600;
document.getElementById("disc2").style.transform = "rotate("+degree2+"deg)";
}

var degree1 = 0;
function rotatel1(){
console.log(abspeed);
degree1+=abspeed/3200;
document.getElementById("disc1").style.transform = "rotate("+degree1+"deg)";
}

/*
setTimeout(function(){
	nav.classList.toggle('open');	
}, 800);
*/