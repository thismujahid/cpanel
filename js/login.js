var username = document.getElementById("username"),
    password = document.getElementById("password"),
    loginForm = document.getElementById("login-form"),
    checker = document.getElementById("checker"),
    err = document.getElementById("err"),
    shwo = document.getElementById("sh"),
    hide = document.getElementById("hi");

loginForm.onsubmit = function(e) {
    e.preventDefault();
    if (username.value == "mohamed" && password.value == 12349876) {
        e.preventDefault();
        window.location.replace("home.html")
    } else {
        e.preventDefault();
        err.innerHTML = `<span style="color:red;">SomeThing Want Wrong</span>`
    }
}

function shwoPass() {

    if (password.type === "password") {
        password.type = "text";
        shwo.style.display = "flex";
        hide.style.display = "none";

    } else {
        password.type = "password";
        hide.style.display = "flex";
        shwo.style.display = "none";
    }
}