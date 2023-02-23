const form = document.getElementById('login-form');
form.addEventListener('submit', handleLogin);





let handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkBox = document.getElementById('check').value;

    if (email === 'myemail@e.com' && password === 'mypassword' && checkBox === true && isLoggedIn === false) {  
        localStorage.setItem('email', JSON.stringify({ email }), 'isLoggedIn', true, );
        alert('Login successful!');
        window.location.href = '../index.html'
    } 
    else if (email === 'myemail@e.com' && password === 'mypassword' && checkBox === false && isLoggedIn === false) {
        localStorage.setItem(isLoggedIn === true)
        alert('Login successful!');
        window.location.href = '../index.html';
    } else {
        alert('Invalid email or password');
    }
}

console.log(form)

let protectedRoute = () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = '../index.html'
    } else {
        window.location.href = './login.html'
    }       
}
