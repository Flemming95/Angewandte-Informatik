const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var attempt = 3;

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Admin" && password === "Admin") {
        alert("You have successfully logged in.");
        window.location.href="adminPage.html";
    } else {
        attempt --;
        alert("You have " + attempt + " attempts left");
    }
    if( attempt == 0){
        document.getElementById("username-field").disabled = true;
        document.getElementById("password-field").disabled = true;
        document.getElementById("login-form-submit").disabled = true;
        return false;
    }
    loginErrorMsg.style.opacity = 1;
})