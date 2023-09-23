document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  const message = document.getElementById('message');

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const response = await fetch('https://kostyle-7q3z.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      alert('Your account has been created and now please log in into your account.');
      const data = await response.json();
      message.textContent = data.msg;
    } catch (error) {
      console.error(error);
    }
  });



  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
      const response = await fetch('https://kostyle-7q3z.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });
      try {

        if (response.status === 200) {
          console.log('Login form submitted');
          const data = await response.json();
          message.textContent = data.msg;
          const locate = window.location.href = 'main.html';

        } else if (response.status === 401) {
          // Handle invalid login attempt
          const data = await response.json();
          message.textContent = data.msg; // Display error message to the user

        } 
        else if (response.status === 501) {
          // Handle invalid login attempt
          const data = await response.json();
          message.textContent = data.msg; }
        else {
          console.log('Unexpected response:', response.status);
          // Handle other unexpected responses
        }
      }
      catch (eror) {
        console.log(eror)
      }
    } catch (error) {
      console.log(error);
    }
  });
});





const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active')
  })
}

