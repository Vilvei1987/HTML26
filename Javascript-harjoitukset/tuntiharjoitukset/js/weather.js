const form = document.querySelector("#weatherForm");
const cityInput = document.querySelector("#cityInput");
const paikka = document.querySelector("#saa");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const kaupunki = cityInput.value.trim();
    paikka.innerHTML = "Ladataan säätietoja...";

    
    const url = `https://open-weather13.p.rapidapi.com/city?city=${kaupunki}&lang=EN&units=metric`;
    
    const optiot = {
        method: "GET",
        headers: {
            "x-rapidapi-host": "open-weather13.p.rapidapi.com",
            "x-rapidapi-key": "bfbda85fb2msh941f56e18848067p165104jsnee8bbd63794d",
        },
    };

    try {
        const response = await fetch(url, optiot);

        if (!response.ok) {
            throw new Error(`HTTP-virhe! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        
        // Luetaan Fahrenheit-lämpötila API:sta
        const fahrenheitTemp = data.main.temp; 
        
        // Muunnetaan Celsius-asteiksi ja pyöristetään 1 desimaaliin
        const lampotila = ((fahrenheitTemp - 32) * 5 / 9).toFixed(1);
        
        const kuvaus = data.weather[0].description;
        const nimi = data.name;

        paikka.innerHTML = `<strong>Kaupunki:</strong> ${nimi} <br />
                            <strong>Lämpötila:</strong> ${lampotila} °C <br />
                            <strong>Sää:</strong> ${kuvaus}`;

    } catch (error) {
        console.error(error);
        paikka.innerHTML = `<span style="color: red;">Virhe säätietojen haussa (tarkista kaupungin nimi tai API-avain).</span>`;
    }
});