function signUp() {
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    console.log("Signing up with:", username, email, password);

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
}

function login() {
    var loginUsername = document.getElementById("login-username").value;
    var loginPassword = document.getElementById("login-password").value;

    var storedUsername = localStorage.getItem("username");
    var storedPassword = localStorage.getItem("password");

    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert("Login successful!");
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
