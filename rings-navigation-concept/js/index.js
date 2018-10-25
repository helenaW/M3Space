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
          pointNum = pointers.numOfPointers;
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



var currentAngle = 15;
//Using a layer on top of the entire page for "fat-finger" detection on mobile devices.
//document.getElementById('disc5').style.transform = 'rotate(15deg)';

var target = document.getElementById('interaction');
var region = new ZingTouch.Region(target);


region.bind(target, 'rotate', function(e) {
  if( pointNum == 5){
    var rotatable = document.getElementById('disc1');
  } else if(pointNum == 4){
    var rotatable = document.getElementById('disc2');
  } else if(pointNum == 3){
    var rotatable = document.getElementById('disc3');
  } else if(pointNum == 2){
    var rotatable = document.getElementById('disc4');
  } else if (pointNum == 1){
    var rotatable = document.getElementById('disc5');
  } else{
    //lol
  }
  
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
}


document.getElementById("zIndexShift").addEventListener("click", zShift);

var toggleZ = true;

function zShift(){
  if(toggleZ){
  document.getElementById("interaction").style.zIndex = "1000";
  toggleZ=false;
  }else{
    document.getElementById("interaction").style.zIndex = "0";
    toggleZ= true;
  }
  console.log(toggleZ);
}


setTimeout(function(){
	nav.classList.toggle('open');	
}, 800);

