let cart = JSON.parse(localStorage.getItem('cart')) || [];

function openCartModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'block'; 
  updateCart(); 
}
  const cartOpenButton = document.getElementById('cart-button');
  cartOpenButton.addEventListener('click', openCartModal);
 
function closeCartModal() {
  const modal = document.getElementById('cart-modal');
  modal.style.display = 'none'; 
}
  const cartCloseButton = document.getElementById('close-button');
  cartCloseButton.addEventListener('click', closeCartModal);

window.onclick = function(event) {
  const modal = document.getElementById('cart-modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

function updateCartCount() {
  const itemCount = document.getElementById('item-count');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalItems = 0;
  cart.forEach(product => totalItems += product.quantity);
  itemCount.textContent = totalItems;
}

function updateCart() {
  const cartDiv = document.getElementById('cart-items');
  const proceedBtn = document.getElementById('proceed-btn');
  const itemCount = document.getElementById('item-count');

  cartDiv.innerHTML = '';
  if (cart.length === 0) {
    cartDiv.innerHTML = '<p>Your cart is empty.</p>';
    itemCount.textContent = '0';  
    proceedBtn.style.display = 'none';
  } else {
    let totalAmount = 0;
    let totalItems = 0;
  
    cart.forEach(product => {
      totalAmount += product.price * product.quantity;
      totalItems += product.quantity; 

      const itemDiv = document.createElement('div');
      itemDiv.className = 'cart-item';
      itemDiv.innerHTML = `
      <div class="cart-name-image-price">
        <p>${product.name}:${product.image} £${product.price} x ${product.quantity}</p>
      </div>
      <div class="cart-item-button">
        <button onclick="decreaseQuantity(${product.id})">-</button>
        <button onclick="increaseQuantity(${product.id})">+</button>
        <button onclick="removeFromCart(${product.id})">Remove</button>
        
      </div>
      `;

      cartDiv.appendChild(itemDiv);
    });
   
    const formattedTotal = totalAmount.toFixed(2);

    const totalDiv = document.createElement('div');
    totalDiv.innerHTML = `<h3>Total: £${formattedTotal}</h3>`;
    totalDiv.classList.add('total-class'); 
    cartDiv.appendChild(totalDiv);

    itemCount.textContent = totalItems; 
    proceedBtn.style.display = 'inline-block'; 
  }
  
} 
/* eslint-disable no-unused-vars */
function addToCart(productId, productName, productImage, price) {
  const formattedPrice = parseFloat(price).toFixed(2);
  
  const item = cart.find(product => product.id === productId);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({
      id: productId,
      name: productName,
      image: productImage,
      price: formattedPrice, 
      quantity: 1
    });
    
  }
  localStorage.setItem('cart', JSON.stringify(cart));

    updateCart();
    updateCartCount();
}


function increaseQuantity(productId) {
  const item = cart.find(product => product.id === productId);

  if (item) {
    item.quantity += 1;
    const totalPrice = (item.price * item.quantity).toFixed(2);
    item.totalPrice = totalPrice;
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart();
    updateCartCount();
  }
}


function decreaseQuantity(productId) {
  const item = cart.find(product => product.id === productId);

  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      cart = cart.filter(product => product.id !== productId);
    }
    const totalPrice = (item.price * item.quantity).toFixed(2);
    item.totalPrice = totalPrice;
    localStorage.setItem('cart', JSON.stringify(cart));

    updateCart();
    updateCartCount();
  }
}


function removeFromCart(productId) {
  cart = cart.filter(product => product.id !== productId);
  localStorage.setItem('cart', JSON.stringify(cart));

  updateCart(); 
  updateCartCount();
}


function showUserForm() {
  document.getElementById('user-info-form').style.display = 'block';
  
}

function validateForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const postcode = document.getElementById("postcode").value.trim();
  const errorElement = document.getElementById("error");

   const postcodePattern = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;

   if (postcodePattern.test(postcode)) {
       errorElement.textContent = "";
       alert("Postcode is valid!");
   } else {
       errorElement.textContent = "Please enter a valid postcode.";
   }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    alert("Please enter a valid name (letters and spaces only).");
    return false;
  }

  if (!email) {
    alert("Please enter a valid email.");
    return false;
  }

  if (address.trim() === "") {
    alert("Please enter a valid address.");
    return false;
  }

  if (!/^\d{11}$/.test(phone)) {
    alert("Please enter a valid 11-digit phone number.");
    return false;
  }

  alert("Form submitted successfully! Proceeding to payment...");
  window.location.href = '/payment.html'; // Example redirect
  return true;
}


function proceedToPayment(totalAmount) {
  if (confirm("Are you sure you want to proceed to payment?")) {
    alert(`Proceeding to payment for a total amount of $${totalAmount}...`);
    
    fetch('/create-transaction-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: totalAmount }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        window.location.replace(`/payment.html?token=${data.token}`);
      } else {
        alert('Error creating transaction token.');
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("An error occurred while proceeding to payment.");
    });
  } else {
    alert("Payment process cancelled.");
  }
}


document.addEventListener('DOMContentLoaded', function() {
  updateCartCount(); // header
});
