const d = document;
const $form = d.querySelector('.form');

d.addEventListener('submit', (e) => {
	e.preventDefault();
	const formData = new FormData($form);
	const entries = formData.entries();
	const data = Object.fromEntries(entries);

	checkInputs(data);
});

function checkInputs(data) {
	const usernameValue = data.username.trim();
	const emailValue = data.email.trim();
	const genderValue = data.gender.trim();
	const passwordValue = data.password.trim();
	const password2Value = data.password2.trim();

	if (usernameValue === '') setErrorFor(d.getElementById('username'), 'Username cannot be blank');
	else setSuccessFor(d.getElementById('username'));

	if (emailValue === '') setErrorFor(d.getElementById('email'), 'Email cannot be blank');
	else if (!isEmail(emailValue)) setErrorFor(d.getElementById('email'), 'Email not valid');
	else setSuccessFor(d.getElementById('email'));

	// if (genderValue === undefined || genderValue === null || genderValue === '') {
	// 	setErrorForRadio(d.getElementById('other'), 'Have to select a gender');
	// } else {
	// 	setSuccessFor(d.getElementById('other'), 'form__div--gender');
	// }

	if (passwordValue === '') setErrorFor(d.getElementById('password'), 'Password cannot be blank');
	else setSuccessFor(d.getElementById('password'));

	if (password2Value === '') setErrorFor(d.getElementById('password2'), 'Password cannot be blank');
	else if (passwordValue !== password2Value) {
		setErrorFor(d.getElementById('password'), 'Password does not match');
		setErrorFor(d.getElementById('password2'), 'Password does not match');
	} else setSuccessFor(d.getElementById('password2'));
}

function setErrorFor(input, message) {
	const $formDiv = input.parentElement;
	const $small = $formDiv.querySelector('small');
	$formDiv.className = 'form__div error';
	$small.textContent = message;
}

function setSuccessFor(input, classA = '') {
	const $formDiv = input.parentElement;
	$formDiv.className = 'form__div success' + classA;
}
function isEmail(email) {
	return /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/.test(email);
}
