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

// When a link is clicked, the link’s event runs first, then the container’s event also runs.
// The container event also triggers because the click event moves upward to its parent element.
// Event bubbling is when an event starts from the child element and then moves up to its parent elements in the DOM.

// Short Reflection:
// I managed the state using the variables isMenuOpen and activeLink to control the menu and active link. I used setTimeout() to show a loading message, which shows asynchronous behavior. Event bubbling happens when a click starts on a link and then moves up to the container element.