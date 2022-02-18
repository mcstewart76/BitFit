const signUpFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector('#signupbtn').addEventListener('click', signUpFormHandler);

// storing input from signup-form
function store() {
  localStorage.setItem('name', name.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('password', password.value);
};

  // stored data from the signup-form
  const storedName = localStorage.getItem('name');
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');

  // check if stored data
  function check() {
  if(name.value === storedName && email.value === storedEmail && pw.value === storedPassword ) {
    
    const response = await fetch('/api/homeroutes', {
      
})

  };

};







