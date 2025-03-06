$("#contact_form").on("submit", function( event ) {

    if ($("#name").val() != "" && $("#message").val() != "" && $("#email").val() != ""){
        var data = {
            service_id: 'service_s2lkfdf',
            template_id: 'template_veqrnos',
            user_id: 'Oyt56hhrhbmTy50qm',
            template_params: {
                'from_name': $("#name").val(),
                'to_name': "Pablo Maya",
                'message': $("#email").val() + " - " + $("#message").val()
            }
        };
    
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            alert('Your mail is sent!');
            $("#contact_form")[0].reset();
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    }else{
        alert("There are empty fields in the form");
    }

    event.preventDefault();
});
