document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");


    if (username === "messi" && password === "10") {

        window.location.href = "c1.html";
    } else {
        errorMessage.textContent = "Invalid username or password. Please try again.";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
});