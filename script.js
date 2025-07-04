// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    });
}

// Handle form submission (for contact form)
document.getElementById("contactForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if(name && email && message) {
        alert("Thank you for contacting me, " + name + ". I will get back to you soon!");
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
});