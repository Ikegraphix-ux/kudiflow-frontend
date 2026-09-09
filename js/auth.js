const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const loginError = document.getElementById("loginError");

const loginButton = document.getElementById("loginButton");
const loginButtonText = document.getElementById("loginButtonText");
const loginSpinner = document.getElementById("loginSpinner");

const togglePassword = document.getElementById("togglePassword");


/* ========================================
   PASSWORD VISIBILITY
======================================== */

togglePassword.addEventListener("click", () => {

    const isPassword =
        passwordInput.type === "password";

    passwordInput.type =
        isPassword ? "text" : "password";

    togglePassword.textContent =
        isPassword ? "Hide" : "Show";
});


/* ========================================
   VALIDATION
======================================== */

function validateLogin() {

    let valid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    loginError.classList.add("hidden");


    // Email validation
    if (!emailInput.value.trim()) {

        emailError.textContent =
            "Email address is required.";

        valid = false;

    } else if (!emailInput.validity.valid) {

        emailError.textContent =
            "Enter a valid email address.";

        valid = false;
    }


    // Password validation
    if (!passwordInput.value.trim()) {

        passwordError.textContent =
            "Password is required.";

        valid = false;

    } else if (passwordInput.value.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        valid = false;
    }

    return valid;
}


/* ========================================
   LOADING STATE
======================================== */

function setLoginLoading(loading) {

    loginButton.disabled = loading;

    if (loading) {

        loginButtonText.textContent =
            "Signing in...";

        loginSpinner.classList.remove("hidden");

    } else {

        loginButtonText.textContent =
            "Login";

        loginSpinner.classList.add("hidden");
    }
}


/* ========================================
   LOGIN
======================================== */

loginForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    if (!validateLogin()) {
        return;
    }

    setLoginLoading(true);


    /*
     * FRONTEND DEMO ONLY
     *
     * We simulate communication
     * with a backend.
     */

    await new Promise(resolve => {
        setTimeout(resolve, 1500);
    });


    const email = emailInput.value.trim();
    const password = passwordInput.value;


    /*
     * Demo credentials
     *
     * Email:
     * demo@kudiflow.com
     *
     * Password:
     * password123
     */

    if (
        email === "demo@kudiflow.com" &&
        password === "password123"
    ) {

        sessionStorage.setItem(
            "kudiflow_logged_in",
            "true"
        );

        window.location.href =
            "dashboard.html";

        return;
    }


    // Login failed

    setLoginLoading(false);

    loginError.textContent =
        "Invalid email or password. Please try again.";

    loginError.classList.remove("hidden");

});