// validation script here
/*- phoneNumber :

  - must be a valid Tunisia number (13 digit) ex: 0021620200200.

- username :

  - must be alphanumeric and contain 5-12 characters ex: walid123.

- password :

  - must be alphanumeric contain 5-12 characters,must have uppercase and lowercase ex:WAlid123.

- cardNumber :

  - must be numeric (6-digit) between every two digit (-) ex: 12-35-89.

- email

  - must be a valid email */

  

$(window).ready(function(){
 
$('#userName').on('keyup', function(){
        (/^\w{5,12}$/.test($(this).val()) && /\d/.test($(this).val()) && /[a-z]/i.test($(this).val())) ? $(this).css('borderColor', 'green') : $(this).css('borderColor', 'red');
    });

$('#password').on('keyup', function(){
        (/^\w{5,12}$/.test($(this).val()) && /\d/.test($(this).val()) && /[a-z]/.test($(this).val()) && /[A-Z]/.test($(this).val()) ) ? $(this).css('borderColor', 'green') : $(this).css('borderColor', 'red');
    });


})

