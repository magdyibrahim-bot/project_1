/* ================= Change Images ================= */
const mainImg = document.querySelector(".main-img");
const thumbs = document.querySelectorAll(".thumbs img");

thumbs.forEach(img => {
  img.addEventListener("click", () => {
    mainImg.src = img.src;

    thumbs.forEach(i => i.classList.remove("active"));
    img.classList.add("active");
  });
});

/* ================= Cart ================= */
/* let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartCount = document.getElementById("cart-count");
updateCartCount();

document.querySelector(".add-cart").addEventListener("click", () => {
  const color = document.getElementById("color").value;
  const model = document.getElementById("model").value;

  const qty = parseInt(document.getElementById("quantity").value);

if (!color || !model || isNaN(qty) || qty < 1) {
    alert("Please select model, color, and quantity");
    return;
}

const product = {
    id: Date.now(),
    name: "Premium Phone Case",
    price: 250,
    color,
    model,
    qty,
    image: mainImg.src
};

  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  toast("Added to cart ✔");
});
 */
/* ================= Cart Count ================= */
/* function updateCartCount() {
  cartCount.textContent = cart.length;
}
 */
/* ================= Toast ================= */
/* function toast(msg) {
  const div = document.createElement("div");
  div.textContent = msg;
  div.style.cssText = `
    position:fixed;
    bottom:30px;
    right:30px;
    background:#211c24;
    color:#fff;
    padding:15px 20px;
    border-radius:10px;
    z-index:9999;
  `;
  document.body.appendChild(div);

  setTimeout(() => div.remove(), 2000);
}
 */