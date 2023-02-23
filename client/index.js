let protectedRoute = () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        window.location.href = './index.html'
    } else {
        window.location.href = './login/login.html'
    }       
}