$(document).ready(function() {
    $('form').on('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();

        // Clear any previous error messages
        $('.error').remove();

        // Validation flags
        let isValid = true;

        // Get values from fields
        const firstName = $('#firstname').val();
        const lastName = $('#lastname').val();
        const address = $('#address').val();
        const postalCode = $('#postal').val();
        const city = $('#city').val();
        const phone = $('#phone').val();
        const civility = $('#civility').val();
        const login = $('#login').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirm-password').val();

        // Validation checks
        if (firstName === '') {
            $('#firstname').after('<span class="error">First name is required.</span>');
            isValid = false;
        }

        if (lastName === '') {
            $('#lastname').after('<span class="error">Last name is required.</span>');
            isValid = false;
        }

        if (address === '') {
        $('#address').after('<span class="error">Address is required.</span>');
            isValid = false;
        }

        // Postal code should match five digits
        if (!/^\d{5}$/.test(postalCode)) {
            $('#postal').after('<span class="error">Invalid postal code.</span>');
            isValid = false;
        }

        if (city === '') {
            $('#city').after('<span class="error">City is required.</span>');
            isValid = false;
        }

        // Phone should match 10 digits : 01 23 45 67 89 and 0123456789 are accepted
        if (!/^0\d(\s?\d\d){4}$/.test(phone)) {
            $('#phone').after('<span class="error">Invalid phone number.</span>');
            isValid = false;
        }

        if (civility === '') {
            $('#civility').after('<span class="error">Please select your civility.</span>');
            isValid = false;
        }

        if (email === '') {
            $('#email').after('<span class="error">Invalid email.</span>');
            isValid = false;
        }

        if (login === '') {
            $('#login').after('<span class="error">Login is required.</span>');
            isValid = false;
        }

        if (password !== confirmPassword) {
            $('#confirm-password').after('<span class="error">Passwords do not match.</span>');
            isValid = false;
        }

        // If all checks are valid
        if (isValid) {
            // Proceed with form submission
            alert('Form is valid and ready to be submitted.');
        }
    });
});
