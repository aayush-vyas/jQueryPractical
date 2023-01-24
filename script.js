var pwdLength = /^.{8,16}$/;
var pwdUpper = /[A-Z]+/;
var pwdLower = /[a-z]+/;
var pwdNumber = /[0-9]+/;
var pwdSpecial = /[!@#$%^&()'[\]"?+-/*={}.,;:_]+/;
$(document).ready(function () {
    $("#signupform").validate({
        rules: {

            uname: {
                minlength: 5,
                required: true
            },
            email: {
                required: true,
                minlength: 5
            }
        },

    }),

        $('#password').keyup(function () {
            var s = $('#password').val();

            if (pwdLength.test(s)) {

                $('#pwd-restriction-length').css('color', 'green');

            }
            else {
                $('#pwd-restriction-length').css('color', 'red');

            }


            if (pwdUpper.test(s)) {

                $('#pwd-restriction-upper').css('color', 'green');

            }
            else {
                $('#pwd-restriction-upper').css('color', 'red');

            }


            if (pwdLower.test(s)) {

                $('#pwd-restriction-lower').css('color', 'green');

            }
            else {
                $('#pwd-restriction-lower').css('color', 'red');
            }

            if (pwdNumber.test(s)) {

                $('#pwd-restriction-number').css('color', 'green');

            }
            else {
                $('#pwd-restriction-number').css('color', 'red');
            }

            if (pwdSpecial.test(s)) {

                $('#pwd-restriction-special').css('color', 'green');

            }
            else {
                $('#pwd-restriction-special').css('color', 'red');
            }
        });
});
