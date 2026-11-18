async function vitsi() {
    const url = "https://dad-jokes.p.rapidapi.com/random/joke";
    const optiot = {
        method: "GET",
        headers: {
            "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
            "x-rapidapi-key": "bfbda85fb2msh941f56e18848067p165104jsnee8bbd63794d"
        }
    };

    try {
        const response = await fetch(url, optiot);

        if (!response.ok) {
            throw new Error(`HTTP-virhe! Status: ${response.status} (Osoite saattaa olla väärä)`);
        }

        const data = await response.json();
        console.log(data);
        
    } catch (error) {
        console.error("Virhe haussa:", error.message);
    }
}

vitsi();