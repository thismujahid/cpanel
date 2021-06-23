var nav = document.querySelector('.navigation');
var main = document.querySelector('.main');

function toggler() {
    nav.classList.toggle('active');
    main.classList.toggle('active');
}
var restForm = document.getElementById("reset-form");
var sucP = document.querySelector(".suc");
var restinput = document.querySelector('form input[type="email"]');
restForm.onsubmit = function(e) {
    e.preventDefault();
    sucP.innerHTML = `<span style="color:green">Sucessfull, Check Your Mail Inbox</span>`;
    restinput.value = "";
}
restinput.onkeydown = function() {
    sucP.innerHTML = "";
}