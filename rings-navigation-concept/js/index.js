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


document.getElementById("disc5").addEventListener("mouseenter", rotatel5);

var degree = 0;

function rotatel5(){
degree++;
document.getElementById("disc5").style.transform = "rotate("+degree+"deg)";
}



setTimeout(function(){
	nav.classList.toggle('open');	
}, 800);