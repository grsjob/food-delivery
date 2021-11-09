const auth = () => {
	const buttonAuth = document.querySelector('.button-auth');
	const modalAuth = document.querySelector('.modal-auth');
	const closeAuth = document.querySelector('.close-auth');
	const logInForm = document.getElementById('logInForm');
	const inputLogin = document.getElementById('login');
	const inputPassword = document.getElementById('password');
	const buttonOut = document.querySelector('.button-out');
	const userName = document.querySelector('.user-name');
	const modalDialogAuth = document.querySelector('.modal-dialog-auth');

	const incorrectInput = () => {
		const span = document.createElement('span');
		span.style.color = 'red';
		span.style.position = 'absolute';
		span.style.top = '43%';
		span.style.right = '25%';
		span.textContent = 'Некорректный ввод';
		modalDialogAuth.append(span);

		inputLogin.addEventListener('click', () => {
			span.style.display = 'none';
		})
		inputPassword.addEventListener('click', () => {
			span.style.display = 'none';
		})

		closeAuth.addEventListener('click', () => {
			span.style.display = 'none';
		})

	}

	const login = (user) => {
		buttonAuth.style.display = 'none';
		buttonOut.style.display = 'flex';
		userName.style.display = 'flex';
		modalAuth.style.display = 'none';
		userName.textContent = user.login;
	}
	const logout = (user) => {
		buttonAuth.style.display = 'flex';
		buttonOut.style.display = 'none';
		userName.style.display = 'none';
		modalAuth.style.display = 'none';
		userName.textContent = '';
		localStorage.removeItem('user');
	}

	buttonAuth.addEventListener('click', () => {
		modalAuth.style.display = 'flex';
	})
	closeAuth.addEventListener('click', () => {
		modalAuth.style.display = 'none';

	})

	logInForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const user = {
			login: inputLogin.value,
			password: inputPassword.value
		}
		if (user.login || user.password) {
			localStorage.setItem('user', JSON.stringify(user));
			login(user);
		} else {
			incorrectInput();
			return;
		}

	})

	buttonOut.addEventListener('click', () => {
		logout();
	})

	if (localStorage.getItem('user')) {
		login(JSON.parse(localStorage.getItem('user')));
	}
}

export default auth;