// Define The Toggeler Navigtion Bar
var toggeler = document.querySelector('.toggel');
var nav = document.querySelector('.navigation');
var main = document.querySelector('.main');
var errArea = document.querySelector('.err');
var resetbtn = document.querySelector('form input[type="reset"]');
var form = document.querySelector('form');
var npass = document.getElementById("n-pass");
var rnpass = document.getElementById("rn-pass");
var cpass = document.getElementById("c-pass");

form.onsubmit = function(e) {
    e.preventDefault()
    if (npass.value === rnpass.value && cpass.value != "" && npass.value !== "" && rnpass.value !== "") {
        form.submit();
    } else if (npass.value === rnpass.value && cpass.value == "") {
        e.preventDefault()

        errArea.innerHTML = `<p style="color:red; font-size:18px;">The curent Password is empty.</p>`;
    } else if (npass.value == "") {
        e.preventDefault()
        errArea.innerHTML = `<p style="color:red; font-size:18px;">The New Password is empty.</p>`;
    } else if (rnpass.value == "") {
        e.preventDefault()
        errArea.innerHTML = `<p style="color:red; font-size:18px;">The Confirm Of New Password is empty.</p>`;
    } else if (npass.value !== rnpass.value && cpass.value != "") {
        e.preventDefault()

        errArea.innerHTML = `<p style="color:red; font-size:18px;">The Confirm New Password Is not Equal New Password, Please Correct The Wrong.</p>`;
    } else if (npass.value !== rnpass.value) {
        e.preventDefault()

        errArea.innerHTML = `<p style="color:red; font-size:18px;">The Confirm New Password Is not Equal New Password, Please Correct The Wrong.</p>`;
    }
}
resetbtn.onclick = function(e) {
    e.preventDefault();
    var con = confirm("Do You Want Clear Inputs?");
    if (con == true) {
        form.reset();
    } else {
        e.preventDefault();
    }
}

function toggler() {
    nav.classList.toggle('active');
    main.classList.toggle('active');
}

function shwPass() {

    if (cpass.type === "password" && rnpass.type === "password" && npass.type === "password") {
        cpass.type = "text";
        npass.type = "text";
        rnpass.type = "text";
    } else {
        cpass.type = "password";
        npass.type = "password";
        rnpass.type = "password";
    }
}