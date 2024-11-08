document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseDiv = document.getElementById('response');
    responseDiv.textContent =`Obrigado, ${name}! Sua mensagem foi enviada.`;

    document.getElementById('contactForm').reset();
});