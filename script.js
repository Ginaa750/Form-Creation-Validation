document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
      // 3. Add submit event listener to the form
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting to the server

        // 4. Get user input and trim whitespace
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // 5. Initialize validation status and message array
        let isValid = true;
        const messages = [];

        // 6. Username validation: at least 3 characters
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // 7. Email validation: must contain '@' and '.'
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // 8. Password validation: at least 8 characters
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // 9. Display feedback
        feedbackDiv.style.display = 'block'; // Show feedback section

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745"; // Green
        } else {
            feedbackDiv.innerHTML = messages.join('<br>');
            feedbackDiv.style.color = "#dc3545"; // Red
        }
    });
});