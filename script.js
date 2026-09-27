const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

/* Close mobile menu after navigation */

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu?.classList.remove("show");
    });
});

/* Contact form */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name  !email  !message) {
            alert("Please fill all fields.");
            return;
        }

        alert(Thank you ${name}! Your message has been received.);

        contactForm.reset();
    });
}

/* Product enquiry */

document.querySelectorAll(".order-btn").forEach(button => {

    button.addEventListener("click", () => {

        window.location.href =
            "/Callme?product=Premium%20Basmati%20Rice";

    });

});
