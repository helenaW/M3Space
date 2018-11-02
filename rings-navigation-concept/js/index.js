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
var movUp = false;
var movLeft = false;

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
          if(pointers.numOfPointers >0){
          pointNum = pointers.numOfPointers;
          }
          movUp = pg.isMovingUp;
          movLeft = pg.isMovingLeft;
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



var currentAngle = 15;
//Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
//document.getElementById('disc5').style.transform = 'rotate(15deg)';

var target5 = document.getElementById('disc5');
var region5 = new ZingTouch.Region(target5);


region5.bind(target5, 'rotate', function(e) {

  var rotatable = document.getElementById('disc5');

  currentAngle += e.detail.distanceFromLast;
  rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';

  setOutput([
    ['Gesture', 'Rotate'],
    ['angle', Math.floor(e.detail.angle) + "°"],
    ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
    ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
  ]);

});

var target4 = document.getElementById('disc4');
var region4 = new ZingTouch.Region(target4);


region4.bind(target4, 'rotate', function(e) {

  var rotatable = document.getElementById('disc4');

  currentAngle += e.detail.distanceFromLast;
  rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';

  setOutput([
    ['Gesture', 'Rotate'],
    ['angle', Math.floor(e.detail.angle) + "°"],
    ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
    ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
  ]);

});

var target3 = document.getElementById('disc3');
var region3 = new ZingTouch.Region(target3);


region3.bind(target3, 'rotate', function(e) {

  var rotatable = document.getElementById('disc3');

  currentAngle += e.detail.distanceFromLast;
  rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';

  setOutput([
    ['Gesture', 'Rotate'],
    ['angle', Math.floor(e.detail.angle) + "°"],
    ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
    ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
  ]);

});

var target2 = document.getElementById('disc2');
var region2 = new ZingTouch.Region(target2);


region2.bind(target2, 'rotate', function(e) {

  var rotatable = document.getElementById('disc2');

  currentAngle += e.detail.distanceFromLast;
  rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';

  setOutput([
    ['Gesture', 'Rotate'],
    ['angle', Math.floor(e.detail.angle) + "°"],
    ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
    ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
  ]);

});

var target1 = document.getElementById('disc1');
var region1 = new ZingTouch.Region(target1);


region1.bind(target1, 'rotate', function(e) {

  var rotatable = document.getElementById('disc1');

  currentAngle += e.detail.distanceFromLast;
  rotatable.style.transform = 'rotate(' + currentAngle + 'deg)';

  setOutput([
    ['Gesture', 'Rotate'],
    ['angle', Math.floor(e.detail.angle) + "°"],
    ['distanceFromOrigin', Math.floor(e.detail.distanceFromOrigin) + "°"],
    ['distanceFromLast', Math.floor(e.detail.distanceFromLast) + "°"]
  ]);

});

function setOutput(data) {
  var outputStr = "> ";
  for (var i = 0; i < data.length; i++) {
    outputStr += data[i][0] + ": " + data[i][1] + ((i === data.length - 1) ? '' : ' , ');
  }
  var output = document.getElementById('output');
  output.innerHTML = outputStr;
  //console.log(abspeed);
}

document.body.addEventListener("pointerleave", opMaster);


/*
document.getElementById("open3").addEventListener("click", op4);
document.getElementById("open4").addEventListener("click", op3);
document.getElementById("open5").addEventListener("click", op2);
*/ 

/*
var toggleZ = true;

function zShift(){
  if(toggleZ){
  document.getElementById("interaction").style.zIndex = "1000";
  toggleZ=false;
  }else{
    document.getElementById("interaction").style.zIndex = "0";
    toggleZ= true;
  }

  //console.log(toggleZ);
}

*/


var counter = 0;

function opMaster(){
  console.log(pointNum);
  if(pointNum==4){
    if(counter==4){
      op2();
      //console.log("4");
      counter = 0;
    }else{
      ++counter;
    }
  }
  else if(pointNum==3){
    if(counter==3){
      op3();
      //console.log("3");
      counter = 0;
    }else{
      ++counter;
    }
  }
  else if(pointNum==2){
    if(counter==2){
      op4();
      //console.log("2");
      counter = 0;
      }else{
        ++counter;
      }
  }
  else if(pointNum==1){
    //op5();
    //console.log("1");
  }
 }




var disc4state = true;
var disc3state = true;
var disc2state = true;
var openAll = true;

function op4(){
  disc3state = true;
  disc2state = true;
  document.getElementById("disc3").style.opacity = "1";
  if(disc4state){
  document.getElementById("disc4").style.opacity = "0";
  disc4state = !disc4state;
  }
  else  {
  document.getElementById("disc4").style.opacity = "1";
  disc4state = !disc4state;
  }
}


function op3(){
  disc4state = true;
  disc2state = true
  document.getElementById("disc2").style.opacity = "1";
  if(disc3state){
  document.getElementById("disc3").style.opacity = "0";
  document.getElementById("disc4").style.opacity = "0";
  disc3state = !disc3state;
  
  
  } else{
    document.getElementById("disc3").style.opacity = "1";
    document.getElementById("disc4").style.opacity = "1";
    disc3state = !disc3state;
   
  }
}

function op2(){
  disc3state = true;
  disc4state = true
  if(disc2state){
  document.getElementById("disc2").style.opacity = "0";
  document.getElementById("disc3").style.opacity = "0";
  document.getElementById("disc4").style.opacity = "0";
  disc2state = !disc2state; 
   
  }
  else  {
    document.getElementById("disc2").style.opacity = "1";
    document.getElementById("disc3").style.opacity = "1";
    document.getElementById("disc4").style.opacity = "1";
    disc2state = !disc2state;
   
  }  
}
function op5(){
if(openAll){
  document.getElementById("disc5").style.opacity = "1";
  document.getElementById("disc4").style.opacity = "1";
  document.getElementById("disc3").style.opacity = "1";
  document.getElementById("disc2").style.opacity = "1";
  document.getElementById("disc1").style.opacity = "1";
  openAll = false;
}else{
  document.getElementById("disc1").style.opacity = "0";
  document.getElementById("disc2").style.opacity = "0";
  document.getElementById("disc3").style.opacity = "0";
  document.getElementById("disc4").style.opacity = "0";
  document.getElementById("disc5").style.opacity = "1";
  openAll = true;
}
}

/*
setTimeout(function(){
	nav.classList.toggle('open');	
}, 800);
*/
