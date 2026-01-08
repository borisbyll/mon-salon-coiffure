document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Merci ! Votre demande de rendez-vous a été envoyée. Nous vous rappellerons d\'ici 1h.');
    this.reset();
});