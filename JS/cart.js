const cartItemsContainer = document.querySelector(".cart-items");
const totalItemsEl = document.getElementById("total-items");
const totalPriceEl = document.getElementById("total-price");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

renderCart();

function renderCart() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
    totalItemsEl.textContent = 0;
    totalPriceEl.textContent = 0;
    return;
  }

  let totalPrice = 0;

  cart.forEach((item, index) => {
    totalPrice += item.price * item.qty;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}">
      <div>
        <h4>${item.name}</h4>
        <p>Color: ${item.color}</p>
        <p>Model: ${item.model}</p>
        <p>Price: ${item.price} EGP</p>
        <p>Quantity: ${item.qty} Pieces</p>
      </div>
      <span class="remove" onclick="removeItem(${index})">&times;</span>
    `;
    cartItemsContainer.appendChild(div);
  });

  totalItemsEl.textContent = cart.length;
  totalPriceEl.textContent = totalPrice;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

const checkBtn = document.querySelector('.checkout-btn');
checkBtn.addEventListener('click',function(){
  window.location.href = "checkout.html";
});