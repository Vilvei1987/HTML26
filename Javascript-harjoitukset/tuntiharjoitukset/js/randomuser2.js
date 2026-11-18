
async function haeKayttajat() {
    const kayttajaLista = document.getElementById("kayttajat");
    const tila = document.getElementById("tila");
    const haku = document.getElementById("haku");
    
    tila.textContent = "Ladataan käyttäjiä...";

    try {
        const vastaus = await fetch("https://randomuser.me/api/?results=50&nat=fi");
        
        if (!vastaus.ok) {
            throw new Error("Käyttäjien hakeminen epäonnistui");
        }

        const data = await vastaus.json();

        const kayttajat = data.results.map(kayttaja => {
            return {
                nimi: `${kayttaja.name.first} ${kayttaja.name.last}`,
                sahkoposti: kayttaja.email,
                kaupunki: kayttaja.location.city
            };
        });

        function naytaKayttajat(lista) {
            kayttajaLista.innerHTML = "";

            lista.forEach(kayttaja => {
                const kortti = document.createElement("div");
                kortti.classList.add("kortti");

                const nimi = document.createElement("h2");
                nimi.textContent = kayttaja.nimi;

                const sahkoposti = document.createElement("p");
                sahkoposti.textContent = kayttaja.sahkoposti;

                const kaupunki = document.createElement("p");
                kaupunki.textContent = kayttaja.kaupunki;

                kortti.appendChild(nimi);
                kortti.appendChild(sahkoposti);
                kortti.appendChild(kaupunki);

                kayttajaLista.appendChild(kortti);
            });
        }

        naytaKayttajat(kayttajat);
        tila.textContent = "";

        haku.addEventListener("input", async () => {
            const hakusana = haku.value.toLowerCase();

            const suodatetut = kayttajat.filter(kayttaja => {
                return kayttaja.nimi.toLowerCase().includes(hakusana);
            });
            tila.textContent = "Ladataan...";

            await new Promise(resolve => setTimeout(resolve, 3000));

            naytaKayttajat(suodatetut);
            tila.textContent = "";
            
        });

    } catch (virhe) {
        tila.textContent = virhe.message;
    }
}

haeKayttajat();
