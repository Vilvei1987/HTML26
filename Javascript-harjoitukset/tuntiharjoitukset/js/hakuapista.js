const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const app = document.getElementById('app');

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();

    const params = new URLSearchParams({ q: query });

    app.innerHTML = '<p>Haetaan tuloksia...</p>';

    try {
    
        await new Promise(resolve => setTimeout(resolve, 1000));

        const response = await fetch(`https://dummyjson.com/users/search?${params.toString()}`);

        if (!response.ok) {
            throw new Error(`HTTP-virhe! Status: ${response.status}`);
        }

        const data = await response.json();
        const users = data.users;

        if (users.length === 0) {
            app.innerHTML = '<p>Ei hakutuloksia löytynyt.</p>';
            return;
        }

        // Näytetään tulokset kortteina
        let html = '<div class="card-container">';
        users.forEach(user => {
            html += `
                <div class="card">
                    <strong>${user.firstName} ${user.lastName}</strong>
                    <p>Sähköposti: ${user.email}</p>
                    <p>Kaupunki: ${user.address.city}</p>
                </div>
            `;
        });
        html += '</div>';

        app.innerHTML = html;

    } catch (err) {
        app.innerHTML = `<p style="color: red;">Virhe: ${err.message}</p>`;
    }
});
