function saveData()
{

let name, email, sub, msg;

name = document.getElementById("name").value;
email = document.getElementById("email").value;
sub = document.getElementById("sub").value;
msg = document.getElementById("msg").value;

localStorage.setItem("name", name);
localStorage.setItem("email", email);
localStorage.setItem("subject", sub);
localStorage.setItem("message", msg);

alert("Submit successfully!");


}
let btnClear =document.getElementById("butn");
let inputs = document.querySelectorAll("input");
let mesg = document.querySelector("textarea");

btnClear.addEventListener("click", () => {
    inputs.forEach(input => input.value = "");
     mesg.value = "";
});