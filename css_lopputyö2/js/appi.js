
/* =========================
   TALLENNUS
========================= */

function tallenna(avain, tiedot) {
    localStorage.setItem(avain, JSON.stringify(tiedot));
}


/* =========================
   TEHTÄVÄLISTA
========================= */

const tehtavaLomake = document.querySelector("#tehtavaLomake");
const tehtavaKentta = document.querySelector("#tehtava");
const tehtavaLista = document.querySelector("#tehtavaLista");

let tehtavat = JSON.parse(localStorage.getItem("tehtavat")) || [];

function naytaTehtavat() {
    tehtavaLista.innerHTML = "";

    tehtavat.forEach((tehtava, i) => {
        const rivi = document.createElement("li");

        const valinta = document.createElement("input");
        valinta.type = "checkbox";
        valinta.checked = tehtava.tehty;
        valinta.setAttribute("aria-label", `Merkitse tehtävä tehdyksi: ${tehtava.nimi}`);

        const teksti = document.createElement("span");
        teksti.textContent = tehtava.nimi;

        if (tehtava.tehty) {
            teksti.style.textDecoration = "line-through";
        }

        valinta.addEventListener("change", () => {
            tehtavat[i].tehty = valinta.checked;
            tallenna("tehtavat", tehtavat);
            naytaTehtavat();
        });

        const poista = document.createElement("button");
        poista.type = "button";
        poista.textContent = "❌ poista";
        poista.setAttribute("aria-label", `Poista tehtävä: ${tehtava.nimi}`);
        poista.title = "Poista tehtävä";

        poista.addEventListener("click", () => {
            tehtavat.splice(i, 1);
            tallenna("tehtavat", tehtavat);
            naytaTehtavat();
        });

        rivi.append(valinta, teksti, poista);
        tehtavaLista.appendChild(rivi);
    });
}

tehtavaLomake.addEventListener("submit", (e) => {
    e.preventDefault();

    const nimi = tehtavaKentta.value.trim();

    if (!nimi) return;

    tehtavat.push({
        nimi: nimi,
        tehty: false
    });

    tallenna("tehtavat", tehtavat);
    naytaTehtavat();
    tehtavaLomake.reset();
});


/* =========================
   OSTOSLISTA
========================= */

const ostosLomake = document.querySelector("#ostosLomake");
const ostosKentta = document.querySelector("#ostos");
const ostosLista = document.querySelector("#ostosLista");

let ostokset = JSON.parse(localStorage.getItem("ostokset")) || [];

function naytaOstokset() {
    ostosLista.innerHTML = "";

    ostokset.forEach((ostos, i) => {
        const rivi = document.createElement("li");

        const valinta = document.createElement("input");
        valinta.type = "checkbox";
        valinta.checked = ostos.ostettu;
        valinta.setAttribute("aria-label", `Merkitse ostetuksi: ${ostos.nimi}`);

        const teksti = document.createElement("span");
        teksti.textContent = ostos.nimi;

        if (ostos.ostettu) {
            teksti.style.textDecoration = "line-through";
        }

        valinta.addEventListener("change", () => {
            ostokset[i].ostettu = valinta.checked;
            tallenna("ostokset", ostokset);
            naytaOstokset();
        });

        const poista = document.createElement("button");
        poista.type = "button";
        poista.textContent = "❌ poista";
        poista.setAttribute("aria-label", `Poista ostos: ${ostos.nimi}`);
        poista.title = "Poista ostos";

        poista.addEventListener("click", () => {
            ostokset.splice(i, 1);
            tallenna("ostokset", ostokset);
            naytaOstokset();
        });

        rivi.append(valinta, teksti, poista);
        ostosLista.appendChild(rivi);
    });
}

ostosLomake.addEventListener("submit", (e) => {
    e.preventDefault();

    const nimi = ostosKentta.value.trim();

    if (!nimi) return;

    ostokset.push({
        nimi: nimi,
        ostettu: false
    });

    tallenna("ostokset", ostokset);
    naytaOstokset();
    ostosLomake.reset();
});


/* =========================
   KALENTERI
========================= */

const kalenteriRuudukko = document.querySelector("#kalenteriRuudukko");
const kuukausiVuosi = document.querySelector("#kuukausiVuosi");
const tapahtumaLomake = document.querySelector("#tapahtumaLomake");
const tapahtumaKentta = document.querySelector("#tapahtuma");
const valittuPaiva = document.querySelector("#valittuPaiva");

const paivaDialogi = document.querySelector("#paivaDialogi");
const paivaDialogiOtsikko = document.querySelector("#paivaDialogiOtsikko");
const paivanTapahtumaLista = document.querySelector("#paivanTapahtumaLista");
const suljePaivaDialogi = document.querySelector("#suljePaivaDialogi");

let nykyinenPaiva = new Date();
let valittuPaivamaara = "";

let tapahtumat = JSON.parse(localStorage.getItem("tapahtumat")) || [];


/* Muodostaa päivämäärän muodossa VVVV-KK-PP */

function muodostaPaivamaara(vuosi, kuukausi, paiva) {
    return `${vuosi}-${String(kuukausi + 1).padStart(2, "0")}-${String(paiva).padStart(2, "0")}`;
}


/* Muuttaa päivämäärän luettavaan muotoon */

function muotoilePaivamaara(paivamaara) {
    const [vuosi, kuukausi, paiva] = paivamaara.split("-").map(Number);

    return new Date(vuosi, kuukausi - 1, paiva)
        .toLocaleDateString("fi-FI", {
            weekday: "short",
            day: "numeric",
            month: "long",
            year: "numeric"
        });
}


/* Näyttää valitun päivän tapahtumat dialogissa */

function naytaPaivanTapahtumat() {
    paivaDialogiOtsikko.textContent =
        muotoilePaivamaara(valittuPaivamaara);

    paivanTapahtumaLista.innerHTML = "";

    const paivanTapahtumat = tapahtumat
        .map((tapahtuma, indeksi) => ({
            ...tapahtuma,
            indeksi: indeksi
        }))
        .filter(tapahtuma => tapahtuma.paiva === valittuPaivamaara);

    if (paivanTapahtumat.length === 0) {
        const rivi = document.createElement("li");
        rivi.textContent = "Ei tapahtumia tälle päivälle.";
        paivanTapahtumaLista.appendChild(rivi);
        return;
    }

    paivanTapahtumat.forEach(tapahtuma => {
        const rivi = document.createElement("li");

        const teksti = document.createElement("span");
        teksti.textContent = tapahtuma.nimi;

        const poista = document.createElement("button");
        poista.type = "button";
        poista.textContent = "❌ poista";
        poista.setAttribute("aria-label", `Poista tapahtuma: ${tapahtuma.nimi}`);
        poista.title = "Poista tapahtuma";

        poista.addEventListener("click", () => {
            tapahtumat.splice(tapahtuma.indeksi, 1);

            tallenna("tapahtumat", tapahtumat);

            naytaKalenteri();
            naytaPaivanTapahtumat();
        });

        rivi.append(teksti, poista);
        paivanTapahtumaLista.appendChild(rivi);
    });
}


/* Sulkee ponnahdusikkunan */

suljePaivaDialogi.addEventListener("click", () => {
    paivaDialogi.close();
});


/* Rakentaa kalenterin */

function naytaKalenteri() {
    const vuosi = nykyinenPaiva.getFullYear();
    const kuukausi = nykyinenPaiva.getMonth();

    const kuukaudet = [
        "tammikuu", "helmikuu", "maaliskuu",
        "huhtikuu", "toukokuu", "kesäkuu",
        "heinäkuu", "elokuu", "syyskuu",
        "lokakuu", "marraskuu", "joulukuu"
    ];

    kuukausiVuosi.textContent = `${kuukaudet[kuukausi]} ${vuosi}`;
    kalenteriRuudukko.innerHTML = "";

    const viikonpaivat = ["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"];

    viikonpaivat.forEach(paiva => {
        const solu = document.createElement("div");
        solu.className = "kalenteri-viikonpaiva";
        solu.textContent = paiva;
        kalenteriRuudukko.appendChild(solu);
    });

    const kuukaudenAlku = new Date(vuosi, kuukausi, 1);
    const paiviaKuukaudessa = new Date(vuosi, kuukausi + 1, 0).getDate();

    // Viikko alkaa maanantaista.
    const tyhjat = (kuukaudenAlku.getDay() + 6) % 7;

    for (let i = 0; i < tyhjat; i++) {
        const solu = document.createElement("div");
        solu.className = "kalenteri-tyhja";
        kalenteriRuudukko.appendChild(solu);
    }

    for (let paiva = 1; paiva <= paiviaKuukaudessa; paiva++) {
        // Päivä on painike, jotta se saa näppäimistökohdistuksen.
        const solu = document.createElement("button");
        solu.type = "button";
        solu.className = "kalenteri-paiva";

        const paivamaara = muodostaPaivamaara(vuosi, kuukausi, paiva);

        solu.appendChild(document.createTextNode(paiva));

        // Kerrotaan ruudunlukijalle päivämäärä.
        solu.setAttribute("aria-label", muotoilePaivamaara(paivamaara));

        if (paivamaara === valittuPaivamaara) {
            solu.classList.add("valittu");
            solu.setAttribute("aria-pressed", "true");
        } else {
            solu.setAttribute("aria-pressed", "false");
        }

        const tanaan = new Date();

        if (
            paiva === tanaan.getDate() &&
            kuukausi === tanaan.getMonth() &&
            vuosi === tanaan.getFullYear()
        ) {
            solu.classList.add("kalenteri-tanaan");
            solu.setAttribute("aria-current", "date");
        }

        const paivanTapahtumat = tapahtumat.filter(
            tapahtuma => tapahtuma.paiva === paivamaara
        );

        paivanTapahtumat.forEach(tapahtuma => {
            const teksti = document.createElement("span");
            teksti.className = "kalenteri-tapahtuma";
            teksti.textContent = tapahtuma.nimi;
            solu.appendChild(teksti);
        });

        solu.addEventListener("click", () => {
            valittuPaivamaara = paivamaara;

            valittuPaiva.textContent =
                `Valittu päivä: ${muotoilePaivamaara(paivamaara)}`;

            naytaKalenteri();
            naytaPaivanTapahtumat();

            if (!paivaDialogi.open) {
                paivaDialogi.showModal();
            }
        });

        kalenteriRuudukko.appendChild(solu);
    }
}


/* =========================
   KUUKAUSINUOLET
========================= */

document.querySelector("#edellinenKuukausi").addEventListener("click", () => {
    nykyinenPaiva.setDate(1);
    nykyinenPaiva.setMonth(nykyinenPaiva.getMonth() - 1);
    naytaKalenteri();
});

document.querySelector("#seuraavaKuukausi").addEventListener("click", () => {
    nykyinenPaiva.setDate(1);
    nykyinenPaiva.setMonth(nykyinenPaiva.getMonth() + 1);
    naytaKalenteri();
});


/* =========================
   TAPAHTUMAN LISÄÄMINEN
========================= */

tapahtumaLomake.addEventListener("submit", (e) => {
    e.preventDefault();

    const nimi = tapahtumaKentta.value.trim();

    if (!valittuPaivamaara) {
        valittuPaiva.textContent = "Valitse ensin päivä kalenterista.";
        return;
    }

    if (!nimi) return;

    tapahtumat.push({
        nimi: nimi,
        paiva: valittuPaivamaara
    });

    tallenna("tapahtumat", tapahtumat);

    tapahtumaLomake.reset();
    naytaKalenteri();
});


/* =========================
   KÄYNNISTYS
========================= */

naytaTehtavat();
naytaOstokset();
naytaKalenteri();


/* =========================
   SÄÄWIDGET
========================= */

// Lataa sääwidgetin vain, jos sitä ei ole jo ladattu HTML:ssä.
if (!document.getElementById("weatherwidget-io-js")) {
    const saaSkripti = document.createElement("script");
    saaSkripti.id = "weatherwidget-io-js";
    saaSkripti.src = "https://weatherwidget.io/js/widget.min.js";
    saaSkripti.async = true;

    document.body.appendChild(saaSkripti);
}


/* =========================
   KELLO
========================= */

function paivitaKello() {
    const kello = document.querySelector("#kello");

    if (!kello) return;

    const nyt = new Date();

    kello.textContent = nyt.toLocaleTimeString("fi-FI", {
        hour: "2-digit",
        minute: "2-digit"
    });
}

paivitaKello();
setInterval(paivitaKello, 1000);
