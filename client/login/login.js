const form = document.getElementById('login-form');
form.addEventListener('submit', handleLogin);





let handleLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const checkBox = document.getElementById('check').value;

    if (email === 'myusername' && password === 'mypassword' && checkBox === true)  {
        localStorage.setItem('email', JSON.stringify({ email }));
        alert('Login successful!');
        setTimeout(window.location.href = '../index.html', 2000);
    } else {
        alert('Invalid email or password');
    }
}
