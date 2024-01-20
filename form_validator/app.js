$('#form').submit(function (e) {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = $('#username').val().trim();
    const emailValue = $('#email').val().trim();
    const passwordValue = $('#password').val().trim();
    const password2Value = $('#password2').val().trim();

    if (usernameValue === '') {
        setErrorFor($('#username'), 'Username cannot be blank');
    } else {
        setSuccessFor($('#username'));
    }

    if (emailValue === '') {
        setErrorFor($('#email'), 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor($('#email'), 'Not a valid email');
    } else {
        setSuccessFor($('#email'));
    }

    if (passwordValue === '') {
        setErrorFor($('#password'), 'Password cannot be blank');
    } else {
        setSuccessFor($('#password'));
    }

    if (password2Value === '') {
        setErrorFor($('#password2'), 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor($('#password2'), 'Passwords does not match');
    } else {
        setSuccessFor($('#password2'));
    }
}

function setErrorFor(input, message) {
    const formControl = input.parent();
    console.log(formControl)
    const small = formControl.find('small');
    
    small.text(message);
    formControl.removeClass('success');
    formControl.addClass('error');
}

function setSuccessFor(input) {
    const formControl = input.parent();
    formControl.removeClass('error');
    formControl.addClass('success');
}

function isEmail(email) {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}