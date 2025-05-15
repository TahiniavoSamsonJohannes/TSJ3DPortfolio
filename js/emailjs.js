const USER_ID = "C5NbJ1TV6I6YtFZdx";
const SERVICE_ID = 'service_bo73plp';
const TEMPLATE_ID = 'template_eogjb8p';

(function() {
    emailjs.init(USER_ID);  // YOUR_USER_ID EmailJS
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Récupère les valeurs des champs par leurs ID
    var user_name = document.getElementById("name").value;
    var user_email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Paramètres à envoyer avec le template
    var templateParams = {
        title: "Portfolio Contact",  // Titre de l'email
        name: user_name,      // Remplace {{name}} par la valeur de user_name
        email: user_email,    // Remplace {{email}} par la valeur de user_email
        message: message,     // Le message lui-même
    };

    // Envoi du message avec les paramètres dans le template
    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)     
    .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById('contact-form').reset();
    }, function(error) {
        alert("Failed to send message. Please try again.");
        console.log('IL Y A UN PROBLEME : ',error);
    });
});
