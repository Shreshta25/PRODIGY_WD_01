document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#777"; // Change background color on scroll
        } else {
            navbar.style.backgroundColor = "#444";
        }
    });
});