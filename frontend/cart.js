document.addEventListener('DOMContentLoaded', () => {
    const cartTable = document.getElementById('cart-table');

    // Retrieve the cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    function updateCartTable() {
        cartTable.innerHTML = ''; // Clear the existing table

        cart.forEach((item, index) => {
            const newRow = cartTable.insertRow(-1);
            const nameCell = newRow.insertCell(0);
            const priceCell = newRow.insertCell(1);
            const actionCell = newRow.insertCell(2);

            nameCell.textContent = item.name;
            priceCell.textContent = '₹' + item.price.toFixed(2);

            // Add a remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Delete';
            // Add a remove button
            removeButton.classList.add('remove-button');
            // Add the "remove-button" class her





            removeButton.addEventListener('click', () => {
                // Remove the item from the cart array by index
                cart.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cart));
                // Update the cart table and total price
                updateCartTable();
                // Recalculate and display the total price
                const total = cart.reduce((acc, currentItem) => acc + currentItem.price, 0);
                totalPrice.textContent = '₹' + total.toFixed(2);
            });
            actionCell.appendChild(removeButton);
        });
    }



    // Initialize the cart table and total price
    updateCartTable();

    // Calculate and display the total price
    const totalPrice = document.getElementById('total-price');
    const total = cart.reduce((acc, currentItem) => acc + currentItem.price, 0);
    totalPrice.textContent = '₹' + total.toFixed(2);
});



document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');


    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            const item = { name, price };
            alert(`${item.name} of price ${item.price} added to cart.`);

            // Retrieve existing cart or create an empty cart array
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart.push(item);

            // Store the updated cart in local storage
            localStorage.setItem('cart', JSON.stringify(cart));

            // Display an alert message


            // Update the cart table
            updateCartTable();
        });
    });
});


document.getElementById('method1').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const cardNumber = document.getElementById('card_number').value;
    const cardHolder = document.getElementById('card_holder').value;
    const expirationDate = document.getElementById('expiration_date').value;
    const cvv = document.getElementById('cvv').value;

    const enteredAmount = parseFloat(document.getElementById('amount').value);

    // Retrieve the total amount from the cart in local storage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalAmountInCart = cart.reduce((acc, currentItem) => acc + currentItem.price, 0);
    console.log(totalAmountInCart)
    if (cardNumber && cardHolder && expirationDate && cvv && amount) {

        if (enteredAmount === totalAmountInCart) {
          
            
                const confirmation = confirm(`Are you sure you want to make the payment?`);
                if (confirmation) {  

                    window.open("succes.html");
            }
        } else {

            alert(`Payment amount (${enteredAmount}) does not match the cart total (${totalAmountInCart}). Please pay the correct amount.`);
        }
    }
    else {
        // Show an error message or perform additional validation
        alert('Please fill in all required fields.');
    }

});


// document.getElementById('method1').addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent form submission

//     // Perform form validation here (e.g., card number format, expiration date, CVV)

//     // If form is valid, navigate to the success page
//     const cardNumber = document.getElementById('card_number').value;
//     const cardHolder = document.getElementById('card_holder').value;
//     const expirationDate = document.getElementById('expiration_date').value;
//     const cvv = document.getElementById('cvv').value;
//     const amount = document.getElementById('amount').value;

//     if (cardNumber && cardHolder && expirationDate && cvv && amount) {
//         // Redirect to success.html
//         if (cardNumber && cardHolder && expirationDate && cvv && amount) {
//             const confirmation = confirm('Are you sure you want to make the payment?');

//             if (confirmation) {
//                 // Redirect to the success page
//                 window.location.href= '';
//             }
//         }
//         // confirm(`you are paying for the items`)
//         // if(confirm==ok){
      
//         // // }
//         // else{
//         //     window.location.href = 'http://127.0.0.1:5500/backend/public/cart1.html';
//         // }
//     } else {
//         // Show an error message or perform additional validation
//         alert('Please fill in all required fields.');
//     }
// });

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



        const bar1 = document.getElementById('bar1');
        const nav1 = document.getElementById('navbar1')
        const close1 = document.getElementById('close1');

        if (bar1) {
            bar1.addEventListener('click', () => {
                nav1.classList.add('active')
            })
        }

        if (close1) {
            close1.addEventListener('click', () => {
                nav1.classList.remove('active')
            })
        }


