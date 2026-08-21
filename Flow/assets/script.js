const form = document.getElementById("loginForm");

const emailInput = document.getElementById("email");

const passwordInput = document.getElementById("password");

const rememberInput = document.getElementById("remember");

const emailError = document.getElementById("emailError");

const passwordError = document.getElementById("passwordError");

const passwordToggle =
    document.getElementById("passwordToggle");

const forgotPassword =
    document.getElementById("forgotPassword");


// =========================================
// PASSWORD SHOW / HIDE
// =========================================

passwordToggle.addEventListener("click", () => {

    const icon =
        passwordToggle.querySelector("i");


    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");

    } else {

        passwordInput.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");

    }

});


// =========================================
// EMAIL VALIDATION
// =========================================

function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}


// =========================================
// LOGIN
// =========================================

form.addEventListener("submit", (event) => {

    event.preventDefault();


    emailError.textContent = "";

    passwordError.textContent = "";


    const email =
        emailInput.value.trim();

    const password =
        passwordInput.value;


    let valid = true;


    // Email

    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        valid = false;

    } else if (!isValidEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        valid = false;

    }


    // Password

    if (password === "") {

        passwordError.textContent =
            "Please enter your password.";

        valid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        valid = false;

    }


    if (!valid) {

        return;

    }


    // Remember Email

    if (rememberInput.checked) {

        localStorage.setItem(
            "loginEmail",
            email
        );

    } else {

        localStorage.removeItem("loginEmail");

    }


    // Success

    alert(
        "🎉 Login successful!\n\nWelcome back!"
    );


    console.log("Email:", email);

});


// =========================================
// LOAD REMEMBERED EMAIL
// =========================================

window.addEventListener("DOMContentLoaded", () => {

    const savedEmail =
        localStorage.getItem("loginEmail");


    if (savedEmail) {

        emailInput.value = savedEmail;

        rememberInput.checked = true;

    }

});


// =========================================
// FORGOT PASSWORD
// =========================================

forgotPassword.addEventListener("click", (event) => {

    event.preventDefault();


    const email =
        prompt(
            "Enter your email address to reset your password:"
        );


    if (!email) {

        return;

    }


    if (!isValidEmail(email)) {

        alert(
            "Please enter a valid email address."
        );

        return;

    }


    alert(
        `Password reset instructions have been sent to ${email}.`
    );

});S