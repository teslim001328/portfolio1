// Add interactivity if needed
console.log("Portfolio website loaded successfully.");
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents default form submission

    // Simulate the form submission to Formspree (you'll need to submit the form manually or using AJAX)
    // After submitting to Formspree, show the success message.

    // Show success message and hide form
    document.getElementById('contactForm').style.display = 'none';
    document.getElementById('successMessage').style.display = 'block';
});