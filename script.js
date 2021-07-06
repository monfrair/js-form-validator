const form = document.getElementById('form');
const password1EL = document.getElementById('password1');
const password2EL = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValidated = false;

function validateForm() {
	// check validity
	isValid = form.checkValidity();
	console.log(isValid);

	// style message for any errors
	message.textContent = 'Please fill out all fields on the form.';
	message.style.color = 'red';
	messageContainer.style.borderColor = 'red';
}

function processFormData(e) {
	e.preventDefault();
	console.log(e);
	// Validate form
	validateForm();
}

// / Event Listener
form.addEventListener('submit', processFormData);
