async function haeKayttajat() {

    const kayttajaLista = document.getElementById("kayttajat");
    const vastaus = await fetch("https://randomuser.me/api/1.3/?results=50&gender=male&nat=fi");
    const data = await vastaus.json();
    console.log(data);
    data.results.forEach(kayttaja => {
    const kuva = `<img class="kuva" src="${kayttaja.picture.large}">`;
    const nimi = `${kayttaja.name.first} ${kayttaja.name.last}`;
    const email = `${kayttaja.email}`;
    const gender = `${kayttaja.gender}`;
    const nat = `${kayttaja.nat}`;
    const kortti = `
        <div class="kortti">
        ${kuva}
        <h2>${nimi}</h2>
        <p>${email}</p>
        <p>${gender}</p>
        <p>Kansallisuus: ${nat}</p>
        </div>`;
    kayttajaLista.innerHTML += kortti;
    
    console.log(kayttaja);
    console.log(kayttaja.name.first);
    console.log(kayttaja.name.last);
    console.log(kayttaja.gender);
    console.log(kayttaja.email);
    console.log(kuva);

});


    // Muutetaan vastaus JSON-muotoon


    // Tulostetaan tiedot konsoliin

}
haeKayttajat();