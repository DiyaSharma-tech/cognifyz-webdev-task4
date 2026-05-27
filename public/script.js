// Get password input
const password = document.getElementById("password");

// Get strength message
const strengthMessage = document.getElementById("strengthMessage");

// Password strength checker
password.addEventListener("input", () => {

    let value = password.value;

    // Weak password
    if (value.length < 6) {

        strengthMessage.innerHTML = "Weak Password";
        strengthMessage.style.color = "red";

    }

    // Medium password
    else if (value.length < 10) {

        strengthMessage.innerHTML = "Medium Password";
        strengthMessage.style.color = "orange";

    }

    // Strong password
    else {

        strengthMessage.innerHTML = "Strong Password";
        strengthMessage.style.color = "green";

    }

});

// Show/Hide Password
document.getElementById("showPassword")
.addEventListener("change", function () {

    if (this.checked) {

        password.type = "text";

    } 
    
    else {

        password.type = "password";

    }

});

// Form submit
function submitForm() {

    // Get input values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let passwordValue = password.value;

    // Validation
    if (name === "" || email === "" || passwordValue === "") {

        alert("Please fill all fields");
        return;

    }

    // Dynamic DOM update
    document.getElementById("welcomeBox")
    .classList.remove("d-none");

    // Dynamic message
    document.getElementById("welcomeMessage")
    .innerHTML = `Welcome, ${name}!`;

    // Client-side routing
    window.location.hash = "welcome";

}

// Client-side routing listener
window.addEventListener("hashchange", () => {

    // If URL contains #welcome
    if (window.location.hash === "#welcome") {

        // Show welcome box
        document.getElementById("welcomeBox")
        .classList.remove("d-none");

    }

});