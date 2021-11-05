const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const logInForm = document.getElementById('logInForm');
const login = document.getElementById('login');


buttonAuth.addEventListener('click', () => {
	modalAuth.style.display = 'flex';
})
closeAuth.addEventListener('click', () => {
	modalAuth.style.display = 'none';
})

logInForm.addEventListener('submit', (event) => {
	event.preventDefault();
	console.log('auth');


})


