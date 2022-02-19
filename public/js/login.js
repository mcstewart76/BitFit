const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  var raw = JSON.stringify({ email, password })
  if (email && password) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
        
    var raw = JSON.stringify({
      "email": email,
      "password": password
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("/api/users/login", requestOptions)
      .then(response => await alert(response.text()))
      .then(result => await alert(result))
      .catch(error => await alert('error', error));




  
  }
};


document.querySelector('#loginbtn').addEventListener('click', loginFormHandler);
document.querySelector('#password-login').addEventListener('keyup', (e) => {
  console.log(e);
   if (e.code === 'Enter') {loginFormHandler(e)}});