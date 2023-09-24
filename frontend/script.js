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
      alert(`please wait for some seconds we are registering your details (due to backend also deploy on cloud services its take time to connect on your first time)`);
      const response = await fetch('https://kostyle-7q3z.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      message.textContent = data.msg;
      alert(`${data.msg}`);
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
          alert(`you are now login with ${data.email} `);
          const locate = window.location.href = 'main.html';

        } else if (response.status === 401) {
          // Handle invalid login attempt
          const data = await response.json();
          message.textContent = data.msg; // Display error message to the user
          alert(`check your email and password please`);

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

// Periodically ping the Express.js application's endpoint to prevent it from going to sleep
// const axios = require('axios'); // Use the axios library for making HTTP requests
// const intervalSeconds = 700; // Adjust this as needed (e.g., 600 seconds = 10 minutes)

// // URL of your Express.js application's endpoint to ping
// const appUrl = 'https://kostyle-7q3z.onrender.com'; // Replace with your app's URL

// function pingApplication() {
//   axios
//     .get(appUrl)
//     .then((response) => {
//       if (response.status === 200) {
//         console.log(`Successfully pinged ${appUrl} at ${new Date().toLocaleString()}`);
//       } else {
//         console.error(`Failed to ping ${appUrl} - Status Code: ${response.status}`);
//       }
//     })
//     .catch((error) => {
//       console.error(`An error occurred: ${error.message}`);
//     });
// }

// setInterval(pingApplication, intervalSeconds * 1000); // Convert seconds to milliseconds for setInterval


// Periodically ping the Express.js application's endpoint to prevent it from going to sleep
const intervalSeconds = 600; // Adjust this as needed (e.g., 600 seconds = 10 minutes)

// URL of your Express.js application's endpoint to ping
const appUrl = 'https://kostyle-7q3z.onrender.com'; // Replace with your app's URL

function pingApplication() {
  fetch(appUrl)
    .then((response) => {
      if (response.status === 200) {
        console.log(`Successfully pinged ${appUrl} at ${new Date().toLocaleString()}`);
      } else {
        console.error(`Failed to ping ${appUrl} - Status Code: ${response.status}`);
      }
    })
    .catch((error) => {
      console.error(`An error occurred: ${error.message}`);
    });
}

setInterval(pingApplication, intervalSeconds * 1000); // Convert seconds to milliseconds for setInterval
