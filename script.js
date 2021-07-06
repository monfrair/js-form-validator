const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2EL = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValidated = false;
let passwordsMatch = false;

function validateForm() {
	// Using Constrait API
	isValid = form.checkValidity();
	// style main message for an error
	if (!isValid) {
		message.textContent = 'Please fill out all fields on the form.';
		message.style.color = 'red';
		messageContainer.style.borderColor = 'red';
	}
	console.log(isValid);
	// check to see if passwords match
	if (password1EL.value === password2EL.value) {
		passwordsMatch = true;
	}
}

function processFormData(e) {
	e.preventDefault();
	console.log(e);
	// Validate form
	validateForm();
}

// / Event Listener
form.addEventListener('submit', processFormData);
