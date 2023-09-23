const bar= document.getElementById('bar');
const nav =document.getElementById('navbar')
const close= document.getElementById('close');

if(bar){
    bar.addEventListener('click', ()=>{
      nav.classList.add('active')
    })
}

if(close){
   close.addEventListener('click', ()=>{
     nav.classList.remove('active')
   })
}

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactBtn = document.getElementById('contact-btn');
  
    contactBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      // Validate the form fields before showing the success alert
      const name = document.getElementById('username').value.trim();
      const email = document.getElementById('emailuser').value.trim();
      const age = document.getElementById('ageuser').value.trim();
      const password = document.getElementById('passworduser').value.trim();
  
      if (name === '' || email === ''||age===""||password==="") {
        alert('Please fill in all the required fields.');
      } else {
        // Form is valid, show success alert
        alert('Your problem is successfully submitted');
        // Reset the form or perform any other necessary actions
        contactForm.reset();
      }
    });
  });



 
