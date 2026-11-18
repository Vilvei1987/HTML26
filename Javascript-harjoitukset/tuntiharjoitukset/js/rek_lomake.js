const form = document.getElementById('registrationForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

form.addEventListener('submit', function (event) {
    event.preventDefault();
 
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Salasanat eivät täsmää.");
    } else {
        confirmPasswordInput.setCustomValidity("");
    }

    const inputs = form.querySelectorAll('input');
    let isFormValid = true;

    inputs.forEach(input => {
        if (!input.checkValidity()) {
            input.setAttribute('aria-invalid', 'true');
            isFormValid = false;
        } else {
            input.setAttribute('aria-invalid', 'false');
        }
    });

    if (isFormValid) {
        const formData = new FormData(form);
        
        console.log('--- Onnistunut lomakkeen lähetys ---');
        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }
    } else {
        console.log('Lomakkeessa on virheitä. Korjaa ne ennen lähettämistä.');
    }
});