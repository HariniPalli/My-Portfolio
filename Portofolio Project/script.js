// Grabbing the contact form 
var contactFormEl = document.getElementById('contactForm');

// Just in case I forget: this handles form submission without reloading the page
contactFormEl.addEventListener('submit', function (event) {
    event.preventDefault();
    var statusParagraph = document.getElementById('formStatus');
    statusParagraph.textContent = "Thanks for your message! I’ll get back to you soon."; 
    // Note: might replace this with a fancier animation later

    // Reset all the fields so it’s nice and tidy again
    contactFormEl.reset();
    statusParagraph.scrollIntoView({ behavior: "smooth" });

    // DEBUG: Just to confirm this runs (remove later)
    console.log("Form submitted and reset at " + new Date().toLocaleTimeString());
});
