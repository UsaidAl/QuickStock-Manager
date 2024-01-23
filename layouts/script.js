
function hashPassword(password) {
   
    var hasher = new TextEncoder().encode(password);
    return crypto.subtle.digest('SHA-256', hasher).then(buffer => {
        var hashArray = Array.from(new Uint8Array(buffer));
        return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
    });
}

function signUp() {
    var username = document.getElementById("signup-username").value;
    var email = document.getElementById("signup-email").value;
    var password = document.getElementById("signup-password").value;

    console.log("Signing up with:", username, email, password);


    hashPassword(password).then(function (hashedPassword) {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", hashedPassword);

        alert("Sign up successful!");
    });
}

function login() {
    var loginUsername = document.getElementById("login-username").value;
    var loginPassword = document.getElementById("login-password").value;

    var storedUsername = localStorage.getItem("username");
    var storedHashedPassword = localStorage.getItem("password");

    
    hashPassword(loginPassword).then(function (hashedLoginPassword) {
        if (loginUsername === storedUsername && hashedLoginPassword === storedHashedPassword) {
            alert("Login successful!");
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
}


