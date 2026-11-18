$(document).ready(function() {
    $('#accessForm').on('submit', function(e) {
        e.preventDefault(); 
        
        let isValid = true;
        let name = $('#userName').val().trim();
        let group = $('#userGroup').val().trim();

        if (name.length < 3 || !/^[а-яА-Яa-zA-ZіІїЇєЄґҐ\s]+$/.test(name)) {
            $('#userName').addClass('is-invalid');
            $('#nameError').slideDown();
            isValid = false;
        } else {
            $('#userName').removeClass('is-invalid').addClass('is-valid');
            $('#nameError').slideUp();
        }

        if (group.length < 3 || !/^\d+$/.test(group)) {
            $('#userGroup').addClass('is-invalid');
            $('#groupError').slideDown();
            isValid = false;
        } else {
            $('#userGroup').removeClass('is-invalid').addClass('is-valid');
            $('#groupError').slideUp();
        }

        if (isValid) {
            $('#authSection').fadeOut(400, function() {
                $('#welcomeMessage').text(`Вітаємо, ${name} (Група ${group})`);
                $('#appsContainer').fadeIn(500);
            });
        }
    });

    $('input').on('input', function() {
        $(this).removeClass('is-invalid is-valid');
        $(this).siblings('.error-message').slideUp();
    });
});