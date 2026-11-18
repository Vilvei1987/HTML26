const app = document.getElementById('app');

async function fetchUsers() {
    app.innerHTML = '<p>Ladataan käyttäjiä...</p>';

    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await fetch('https://dummyjson.com/users');

        if (!response.ok) {
            throw new Error(`HTTP-virhe! Status: ${response.status}`);
        }

        const data = await response.json();
        const users = data.users;

        if (users.length === 0) {
            app.innerHTML = `
                <p>Ei käyttäjiä löytynyt.</p>
                <button onclick="fetchUsers()">Yritä uudelleen</button>
            `;
            return;
        }

        let html = '<h2>Käyttäjälista</h2><ul>';
        users.forEach(user => {
            html += `<li><strong>${user.firstName} ${user.lastName}</strong> (${user.email})</li>`;
        });
        html += '</ul><button onclick="fetchUsers()">Päivitä lista</button>';

        app.innerHTML = html;

    } catch (err) {
        app.innerHTML = `
            <p style="color: red;">Virhe: ${err.message}</p>
            <button onclick="fetchUsers()">Yritä uudelleen</button>
        `;
    }
}

fetchUsers();