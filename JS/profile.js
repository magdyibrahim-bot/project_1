const tabs = document.querySelectorAll(".profile-sidebar ul.tabs li a");
const sections = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", e => {
    e.preventDefault();

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const target = document.querySelector(tab.getAttribute("href"));
    sections.forEach(section => section.classList.remove("active"));
    target.classList.add("active");
  });
});
