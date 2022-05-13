let invalidFirstName = document.getElementById('invalidFirstName');
let validFirstName = document.getElementById('validFirstName');
let invalidLastName = document.getElementById('invalidLastName');
let validLastName = document.getElementById('validLastName');
let invalidEmail = document.getElementById('invalidEmail');
let validEmail = document.getElementById('validEmail');
let invalidPhone = document.getElementById('invalidPhone');
let validPhone = document.getElementById('validPhone');
let invalidState = document.getElementById("invalidState");
let validState = document.getElementById("validState");
let invalidZip = document.getElementById('invalidZip');
let validZip = document.getElementById('validZip');
let invalidtnc = document.getElementById("invalidtnc");

function validate(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let state = document.getElementById("state").value;
    let zip = document.getElementById("zip").value;
    let tncCheckBox = document.getElementById("tncCheckBox").checked;

    if(firstName === ""){
        invalidFirstName.style.display = 'block'
        validFirstName.style.display = 'none'
    }
    else{
        invalidFirstName.style.display = 'none'
        validFirstName.style.display = 'block'
    }

    if(lastName === ""){
        invalidLastName.style.display = 'block'
        validLastName.style.display = 'none'
    }
    else{
        invalidLastName.style.display = 'none'
        validLastName.style.display = 'block'
    }

    if(email === "" || !email.includes("@") || !email.includes(".") || email.slice(email.lastIndexOf('.')).length < 3){
        invalidEmail.style.display = 'block'
        validEmail.style.display = 'none'
    }
    else{
        invalidEmail.style.display = 'none'
        validEmail.style.display = 'block'
    }

    if(phone === "" || phone.length != 10 || Number(phone[0]) < 6){
        invalidPhone.style.display = 'block'
        validPhone.style.display = 'none'
    }
    else{
        invalidPhone.style.display = 'none'
        validPhone.style.display = 'block'
    }

    if (state === "") {
        invalidState.style.display = 'block';
         validState.style.display = 'none';
    } 
    else {
        invalidState.style.display = 'none';
        validState.style.display = 'block';
    }

    if (zip === "" || zip.includes('.') || zip.length != 6) {
        invalidZip.style.display = 'block';
        validZip.style.display = 'none';
    }
    else {
        invalidZip.style.display = 'none';
        validZip.style.display = 'block';
    }

    if (tncCheckBox === false) {
        invalidtnc.style.display = 'block'
    }
    else {
        invalidtnc.style.display = 'none'
    }
}
