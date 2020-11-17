var hamburger = document.getElementById('hamburger');
var menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('show');
	menu.classList.toggle('show');
});