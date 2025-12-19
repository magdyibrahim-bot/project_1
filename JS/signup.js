const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const form = document.querySelector('.login .form');
document.querySelector("#sign-up").addEventListener("click", e => {
  e.preventDefault();
  form.style.height = '100vh';
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
});

document.querySelector(".to-login").addEventListener("click", e => {
  e.preventDefault();
  form.style.height = '70vh';
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
});
