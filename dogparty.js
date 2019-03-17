
var somedogs = document.querySelector('.somedogs');
var namethisdogbutton = document.querySelector('.namethisdogbutton')
var input = document.querySelector('.namethisdoginput');

namethisdogbutton.addEventListener ("click", function(event) {
	event.preventDefault();
	somedogs.innerText = input.value;
});