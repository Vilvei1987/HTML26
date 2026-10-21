const ajastinNaytto = document.querySelector("#ajastinnaytto");
const ajastinAika = document.querySelector("#ajastinaika");
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
    const minuutit = Number(ajastinAika.value);

    if (!Number.isFinite(minuutit) || minuutit <= 0) {
        ajastinNaytto.textContent = "Anna aika!";
        return;
    }

    clearInterval(ajastinVali);

    jaljellaSekunteja = Math.floor(minuutit * 60);
    paivitaAjastin();

    ajastinVali = setInterval(() => {
        jaljellaSekunteja--;
        paivitaAjastin();

        if (jaljellaSekunteja <= 0) {
            clearInterval(ajastinVali);
            ajastinNaytto.textContent = "Aika loppui!";

            alert("⏰ Ajastimen aika loppui!");
        }
    }, 1000);
});

ajastinLopeta.addEventListener("click", () => {
    clearInterval(ajastinVali);
    jaljellaSekunteja = 0;
    ajastinNaytto.textContent = "00:00";
});
