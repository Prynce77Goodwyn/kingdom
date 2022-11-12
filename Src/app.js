const hamburgerbutton = document.getElementById(".hamburgerbutton");
const heroNavMenu = document.getElementById(".heroNavMenu");

hamburgerbutton.addEventListener("click", toggleButton)

function toggleButton(){
	heroNavMenu.classList.toggle("show");
}
