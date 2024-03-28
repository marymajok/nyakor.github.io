//Create the first class called "LoginForm"
class LoginForm {
    constructor() {
        this.emailInput = document.getElementById('email');
        this.passwordInput = document.getElementById('password');
        this.emailValidationMessage = document.getElementById('emailValidationMessage');
        this.passwordValidationMessage = document.getElementById('passwordValidationMessage');
    }
//Add a method for validation of email
    validateEmail() {
        const email = this.emailInput.value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            this.emailValidationMessage.innerText = 'Invalid email format';
            return false;
        } else {
            this.emailValidationMessage.innerText = 'Nice!!';
            return true;
        }
    }
//validatePassword method
    validatePassword() {
        const password = this.passwordInput.value;

        if (password.length < 8) {
            this.passwordValidationMessage.innerText = 'Password must be at least 8 characters long';
            return false;
        } else {
            this.passwordValidationMessage.innerText = 'Well done!!';
            return true;
        }
    }
//The last class for validation of the inputs after the login button is clicked
    validate() {
        const isEmailValid = this.validateEmail();
        const isPasswordValid = this.validatePassword();
s
        if (isEmailValid && isPasswordValid) {
            alert("Login successful!!");
            // You can add further logic here to handle the actual login process.
        }
    }
}

// Create an instance of the LoginForm class
const loginForm = new LoginForm();