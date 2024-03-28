// Step 1: Get references to HTML elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailValidationMessage = document.getElementById('emailValidationMessage');
const passwordValidationMessage = document.getElementById('passwordValidationMessage');
const loginButton = document.querySelector('button');

// Step 2: Attach event listener to the login button
loginButton.addEventListener('click', function () {
    // Step 3: Get values from input fields
    const email = emailInput.value;
    const password = passwordInput.value;

    // Step 4: Validate the input email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailValidationMessage.innerText = 'Invalid email format';
    } else {
        emailValidationMessage.innerText = 'Nice Job';
    }

    // Step 5: Validate the entered password and indicate the message to be sent to the user
    if (password.length < 8) {
        passwordValidationMessage.innerText = 'Password must be at least 8 characters long';
    } else {
        passwordValidationMessage.innerText = 'Cool';
    }

    // Step 6: Check if both the email and password are valid and meet the criteria
    if (emailValidationMessage.innerText === 'Nice Job' && passwordValidationMessage.innerText === 'Cool') {
        // Step 7: Display success message (you can add further logic here)
        alert('Login successful!');
    }
});