const form = document.getElementById('sign-up-form');
form.addEventListener('submit', handleSignUp);

function handleSignUp(e) {
  e.preventDefault();
  const fullName = document.getElementById('name').value;
  const companyName = document.getElementById('companyName').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  // validate user input
  if (!fullName || !companyName || !email || !password) {
    alert('Please fill out all required fields.');
    return;
  }

  localStorage.setItem('user', JSON.stringify({ fullName, companyName, email, password }));
  alert('Sign up successful!');
  window.location.href = '../index.html';
}

let protectedRoute = () => {
  if (localStorage.getItem('isLoggedIn') === 'true') {
      window.location.href = '../index.html'
  } else {
      window.location.href = '../login/login.html'
  }       
}