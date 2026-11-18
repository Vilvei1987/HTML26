const haku = document.getElementById("haku");
const tuotteet = document.getElementById("tuotteet");

haku.addEventListener("input", function() {

    const hakusana = haku.value.toLowerCase();
    const tuotekortit = tuotteet.querySelectorAll(".tuote");

    tuotekortit.forEach(function(tuote) {
        const tuotteenTeksti = tuote.textContent.toLowerCase();

        if (tuotteenTeksti.includes(hakusana)) {
            tuote.style.display = "";
        } else {
            tuote.style.display = "none";
        }
    });

});

tuotteet.addEventListener("click", function(event) {

    const painike = event.target.closest("[data-action=favorite]");

    if (painike) {
        const tuotekortti = painike.closest(".tuote");

        tuotekortti.classList.toggle("suosikki");

        if (tuotekortti.classList.contains("suosikki")) {
            painike.textContent = "♥ Poista suosikeista";
        } else {
            painike.textContent = "♡ Lisää suosikkeihin";
        }
    }

});


const lomake = document.getElementById("tuote-lomake");
const tuoteNimi = document.getElementById("tuote-nimi");
const tuoteKuvaus = document.getElementById("tuote-kuvaus");
const status = document.getElementById("status");

lomake.addEventListener("submit", function(event) {

    event.preventDefault();

    const nimi = tuoteNimi.value.trim();
    const kuvaus = tuoteKuvaus.value.trim();

    if (nimi === "" || kuvaus === "") {
        return;
    }

    const uusiTuote = document.createElement("article");
    uusiTuote.classList.add("tuote");

    const otsikko = document.createElement("h2");
    otsikko.textContent = nimi;

    const kuvausTeksti = document.createElement("p");
    kuvausTeksti.textContent = kuvaus;

    const painike = document.createElement("button");
    painike.dataset.action = "favorite";
    painike.textContent = "♡ Lisää suosikkeihin";

    uusiTuote.append(otsikko, kuvausTeksti, painike);
    tuotteet.appendChild(uusiTuote);

    lomake.reset();

    status.textContent = "Tuote lisätty onnistuneesti!";
});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        lomake.reset();
        haku.value = "";

        const tuotekortit = tuotteet.querySelectorAll(".tuote");

        tuotekortit.forEach(function(tuote) {
            tuote.style.display = "";
        });
    }

});