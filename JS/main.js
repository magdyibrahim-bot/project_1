let copyBtn = document.querySelector('.copy');
let promo = document.querySelector("#myInput");

const links = document.querySelectorAll("header .container nav li .link");
const currentPage = window.location.pathname.split("/").pop();

links.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.classList.add("active");
    }
});


copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(promo.value);

    copyBtn.innerText = "Copied ✓";
    setTimeout(() => copyBtn.innerText = "Copy code", 2000);
});

document.querySelectorAll("img").forEach(img => {
    img.loading = "lazy";
});

document.querySelectorAll(".fa-regular").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});

document.querySelectorAll(".summary .links button").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".summary .links button")
            .forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});
