const ajastinIlmoitus = document.querySelector("#ajastinIlmoitus");
const suljeAjastinIlmoitus = document.querySelector("#suljeAjastinIlmoitus");
const ilmoitusAani = new Audio("aanet/alarm.wav");

const ajastinNaytto = document.querySelector("#ajastinnaytto");
const ajastinMinuutit = document.querySelector("#ajastinMinuutit");
const ajastinSekunnit = document.querySelector("#ajastinSekunnit");
const ajastinAloita = document.querySelector("#ajastinaloita");
const ajastinLopeta = document.querySelector("#ajastinlopeta");

let ajastinVali;
let jaljellaSekunteja = 0;

function paivitaAjastin() {
    const minuutit = Math.floor(jaljellaSekunteja / 60);
    const sekunnit = jaljellaSekunteja % 60;

    ajastinNaytto.textContent =
        `${String(minuutit).padStart(2, "0")}:${String(sekunnit).padStart(2, "0")}`;
}

ajastinAloita.addEventListener("click", () => {
    const minuutit = Number(ajastinMinuutit.value);
    const sekunnit = Number(ajastinSekunnit.value);

    if (
        ajastinMinuutit.value === "" ||
        ajastinSekunnit.value === "" ||
        !Number.isInteger(minuutit) ||
        !Number.isInteger(sekunnit) ||
        minuutit < 0 ||
        sekunnit < 0 ||
        sekunnit > 59 ||
        minuutit + sekunnit === 0
    ) {
        ajastinNaytto.textContent = "Tarkista aika!";
        return;
    }

    clearInterval(ajastinVali);

    ilmoitusAani.pause();
    ilmoitusAani.currentTime = 0;
    ilmoitusAani.loop = false;

    if (ajastinIlmoitus.open) {
        ajastinIlmoitus.close();
    }

    jaljellaSekunteja = minuutit * 60 + sekunnit;
    paivitaAjastin();

    ajastinVali = setInterval(() => {
        jaljellaSekunteja--;
        paivitaAjastin();

        if (jaljellaSekunteja <= 0) {
            clearInterval(ajastinVali);
            ajastinNaytto.textContent = "Valmis!";

            ajastinIlmoitus.showModal();

            ilmoitusAani.loop = true;
            ilmoitusAani.currentTime = 0;

            ilmoitusAani.play().catch(virhe => {
                console.error("Äänen toisto epäonnistui:", virhe);
            });
        }
    }, 1000);
});

ajastinLopeta.addEventListener("click", () => {
    clearInterval(ajastinVali);
    jaljellaSekunteja = 0;
    paivitaAjastin();

    ilmoitusAani.pause();
    ilmoitusAani.currentTime = 0;
    ilmoitusAani.loop = false;

    if (ajastinIlmoitus.open) {
        ajastinIlmoitus.close();
    }
});

suljeAjastinIlmoitus.addEventListener("click", () => {
    ajastinIlmoitus.close();

    ilmoitusAani.pause();
    ilmoitusAani.currentTime = 0;
    ilmoitusAani.loop = false;
});
