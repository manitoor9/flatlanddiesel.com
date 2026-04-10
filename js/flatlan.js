(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // 🔁 Replace this
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(function() {
        document.getElementById("success-message").innerText =
            "✅ Message sent successfully!";
    }, function(error) {
        document.getElementById("success-message").innerText =
            "❌ Failed to send message. Try again.";
    });

    this.reset();
});


