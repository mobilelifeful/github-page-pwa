const form = document.getElementById('login-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform some validation or send a request to the server to verify the login credentials
  if (username === 'admin' && password === 'password') {
    // The login was successful, redirect to the dashboard page
    window.location.href = './dashboard.html';
  } else {
    // The login was unsuccessful, display an error message
    alert('Invalid username or password');
  }
});
