$( document ).ready(function() {

    $('#email-form').submit(function(e) {
        e.preventDefault();
        var email = $('#email').val();

        if ($("#error").length > 0) {
            $(".error").remove();
        }
        if (email.length < 1) {
            $('#email').addClass('error')
        } else {
            if (validateEmail(email)) {
                $('#email').val('');
                alert('Thanks for subscribing')
            } else {
                $('#email').addClass('error')
            }
        }
    });

});


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}