let name_error = document.getElementById('name-error');
let phone_error = document.getElementById('phone-error');
let email_error = document.getElementById('email-error');
let submit_error = document.getElementById('submit-error');

function validateName() {
    let name = document.getElementById('contact-name').value;

    if (name.length == 0) {
        name_error.innerHTML = 'Please enter your name.';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        name_error.innerHTML = 'Please enter a valid name.';
        return false;
    }
    name_error.innerHTML = 'Valid';
    return true;
}

function validatePhone() {
    let phone = document.getElementById('contact-phone').value;
    
    if (phone.length == 0) {
        phone_error.innerHTML = 'Please enter your phone number.';
        return false;
    }
    if (phone.length !== 11) {
        phone_error.innerHTML = 'Phone number should have 10 digits.';
        return false;
    }
    if (!phone.match(/^[0-9]{11}$/)) {
        phone_error.innerHTML = 'Please enter a valid phone number.';
        return false;
    }
    phone_error.innerHTML = 'Valid';
    return true;
}

function validateEmail() {
    let email = document.getElementById('contact-email').value;

    if (email.length == 0) {
        email_error.innerHTML = 'Please enter your email.';
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        email_error.innerHTML = 'Please enter a valid email.';
        return false;
    }
    email_error.innerHTML = 'Valid';
    return true;
}
function signup() {
    let nameValid = validateName();
    let phoneValid = validatePhone();
    let emailValid = validateEmail();

    if ( nameValid && phoneValid && emailValid){
        alert("You have successfully signed up!")
    }
    else{
        alert("Please fill all the necessary details!")
    }
}
