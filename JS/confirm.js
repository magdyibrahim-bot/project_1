// Load the last cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const orderItems = document.getElementById("order-items");
const orderTotal = document.getElementById("order-total");

let total = 0;
cart.forEach(product => {
  total += product.price * product.qty;

  const div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = `<span>${product.name} x ${product.qty}</span>
                   <span>${product.price * product.qty} EGP</span>`;
  orderItems.appendChild(div);
});

orderTotal.textContent = total + " EGP";

// Clear cart after displaying order
localStorage.removeItem("cart");
