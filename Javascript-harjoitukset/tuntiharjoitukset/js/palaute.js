const form = document.getElementById('feedbackForm');
const summaryOutput = document.getElementById('summary');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = form.querySelectorAll('input, select, textarea');
    let isFormValid = true;

    const ratingSelected = form.querySelector('input[name="rating"]:checked');

    inputs.forEach(input => {
        if (input.type === 'radio') return;

        if (!input.checkValidity()) {
            input.setAttribute('aria-invalid', 'true');
            isFormValid = false;
        } else {
            input.setAttribute('aria-invalid', 'false');
        }
    });

    if (!ratingSelected) {
        isFormValid = false;
    }

    if (isFormValid) {
        const formData = new FormData(form);
        
        let summaryHTML = '<h3>Yhteenveto lähetetystä palautteesta:</h3><ul>';
        for (const [key, value] of formData.entries()) {
            summaryHTML += `<li><strong>${key}:</strong> ${value}</li>`;
        }
        summaryHTML += '</ul>';
        
        summaryOutput.innerHTML = summaryHTML;
        console.log('--- Onnistunut lomakkeen lähetys ---');
    } else {
        summaryOutput.innerHTML = '<p>Lomakkeessa on virheitä tai pakollisia tietoja puuttuu. Korjaa ne ennen lähettämistä.</p>';
        console.log('Lomakkeessa on virheitä. Korjaa ne ennen lähettämistä.');
    }
});