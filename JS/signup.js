const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");
const image = document.querySelector('.login .form .image');

document.querySelector("#sign-up").addEventListener("click", e => {
  e.preventDefault();
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
  image.style.backgroundImage = 'url(../img/sign.png)';
});

document.querySelector(".to-login").addEventListener("click", e => {
  e.preventDefault();
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
  image.style.backgroundImage = 'url(../img/log.png)';
});

