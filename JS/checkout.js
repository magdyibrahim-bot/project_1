// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

updateCartUI();

function updateCartUI() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(product => {
    total += product.price * product.qty;

    const div = document.createElement("div");
    div.classList.add("item");
    div.innerHTML = `
      <span>${product.name} x ${product.qty}</span>
      <span>${product.price * product.qty} EGP</span>
    `;
    cartItems.appendChild(div);
  });

  totalEl.textContent = total + " EGP";
  cartCount.textContent = cart.length;
}

// Handle form submission
document.getElementById("checkout-form").addEventListener("submit", function(e) {
  e.preventDefault();

  if(cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  localStorage.removeItem("cart");
  window.location.href = "confirm.html"; // Redirect to confirmation page
});
