let isMenuOpen = false;
let activeLink = null;

let hamburger = document.getElementById("hamburger");
let navLinks = document.getElementById("navLinks");
let links = document.querySelectorAll(".link");
let notification = document.getElementById("notification");
let navbarContainer = document.getElementById("navbarContainer");

hamburger.addEventListener("click", function () {

    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
        navLinks.classList.add("show");
    } else {
        navLinks.classList.remove("show");
    }

});

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();
        // Without preventDefault(), the page will reload when a link is clicked.
        // It is needed in single-page applications so the page does not refresh and the content can update smoothly using JS only.

        if (activeLink) {
            activeLink.classList.remove("active");
        }

        activeLink = link;
        activeLink.classList.add("active");

        notification.innerHTML = "Loading page...";

        setTimeout(function () {
            notification.innerHTML = "Page Loaded!";
        }, 2000);

    });

});

navbarContainer.addEventListener("click", function () {
    console.log("Navbar container clicked (bubbling)");
});