function sendMail(contactForm) {
    emailjs.send('service_uqujqrp', 'template_bysir8t', {
        "from_name" : contactForm.name.value,
        "from_email" : contactForm.emailaddress.value,
        "project_request" : contactForm.projectsummary.value,
    })
    .then(
        function(response) {
            console.log("SUCCESSS", response);
        },
        function(error) {
            console.log("ERROR", error);
        });
    return false;
}