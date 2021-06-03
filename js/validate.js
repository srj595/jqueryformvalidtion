//validation
//return true form is valid
function validate() {
    let f = false;
    let name = $(".name-field").val();
    if (name == '' || name == undefined) {
        $('.name-field-msg')
            .html('name is required')
            .addClass("text-danger")
        f = false;

    }
    else {
        $('.name-field-msg')
            .html('ok')
            .removeClass('text-danger')
            .addClass('text-success');

        f = true;
    }


    // email validation

    let email = $(".email-field").val();
    let exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (email == "" || email == undefined) {
        $(".email-field-msg")
            .html('email is required')
            .addClass("text-danger")
        f = false;
    }

    else if (exp.test(email) == false) {
        $(".email-field-msg")
            .html('email invalid')
            .addClass("text-danger")
        f = false;
    }
    else {
        $(".email-field-msg")
            .html('ok')
            .removeClass('text-danger')
            .addClass("text-success")
        f = true;

    }


    //password validation

    let pass = $(".password-field").val();
    //1digit ,uppercase,lowercase
    let exp1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (pass == "" || pass == undefined) {
        $(".password-field-msg")
            .html('Password is required')
            .addClass("text-danger")

        f = false;
    }
    else if (exp1.test(pass) == false) {
        $(".password-field-msg")
            .html('Password incorrect -must include upperCase,lowerCase,specialsymbol&number')
            .addClass("text-danger")
        f = false;
    }
    else {
        $(".password-field-msg")
            .html('ok')
            .removeClass("text-danger")
            .addClass("text-success")
        f = true;
    }


    // number validation 
    let ph = $(".phone-field").val();
    //cheak length
    // let exp1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (ph == "" || ph == undefined) {
        $(".phone-field-msg")
            .html('Phone is required')
            .addClass("text-danger")
        f = false;
    }
    else if (ph.length == 10) {
        f = true;
    }
    else {

        $(".phone-field-msg")
            .html('Phone should be 10digit')
            .addClass("text-danger")
        f = false;

    }







    return f;
};