const canvas = document.getElementById("pelialue");
const ctx = canvas.getContext("2d");

let kaarme = [
    { x: 200, y: 200 }
];

let ruoka = {
    x: 300,
    y: 300
};

let suunta = "oikea";
let kasvaa = false;
let pisteet = 0;
let peliKaynnissa = false;

const pisteetTeksti = document.getElementById("pisteetArvo");
const uusiPeli = document.getElementById("uusiPeli");
const pelaaUudelleen = document.getElementById("pelaaUudelleen");

let vilkkuu = true;

// Piirretään kaikki Canvasille
function piirra() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Piirrä käärme
    kaarme.forEach(function(osa, indeksi) {

        // Vartalo
        ctx.fillStyle = indeksi === 0 ? "#86efac" : "#16a34a";
        ctx.beginPath();
        ctx.arc(
            osa.x + 10,
            osa.y + 10,
            10,
            0,
            Math.PI * 2
        );
        ctx.fill();

        // Pää
        if (indeksi === 0) {

            // Silmät
            ctx.fillStyle = "white";

            ctx.beginPath();
            ctx.arc(osa.x + 5, osa.y + 6, 4, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(osa.x + 15, osa.y + 6, 4, 0, Math.PI * 2);
            ctx.fill();

            // Pupillit
            ctx.fillStyle = "black";

            ctx.beginPath();
            ctx.arc(osa.x + 5, osa.y + 6, 2, 0, Math.PI * 2);
            ctx.fill();

            ctx.beginPath();
            ctx.arc(osa.x + 15, osa.y + 6, 2, 0, Math.PI * 2);
            ctx.fill();

            // Kieli
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(osa.x + 10, osa.y + 20);
            ctx.lineTo(osa.x + 10, osa.y + 27);
            ctx.lineTo(osa.x + 5, osa.y + 24);
            ctx.moveTo(osa.x + 10, osa.y + 27);
            ctx.lineTo(osa.x + 15, osa.y + 24);
            ctx.stroke();
        }
    });

    // Piirrä hiiri
    ctx.fillStyle = "#9ca3af";

    // Hiiren vartalo
    ctx.beginPath();
    ctx.ellipse(
        ruoka.x + 10,
        ruoka.y + 12,
        10,
        7,
        0,
        0,
        Math.PI * 2
    );
    ctx.fill();

    // Korva
    ctx.beginPath();
    ctx.arc(ruoka.x + 4, ruoka.y + 5, 5, 0, Math.PI * 2);
    ctx.fill();

    // Toinen korva
    ctx.beginPath();
    ctx.arc(ruoka.x + 16, ruoka.y + 5, 5, 0, Math.PI * 2);
    ctx.fill();

    // Silmä
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(ruoka.x + 16, ruoka.y + 10, 2, 0, Math.PI * 2);
    ctx.fill();

    // Häntä
    ctx.strokeStyle = "#9ca3af";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(ruoka.x, ruoka.y + 14);
    ctx.quadraticCurveTo(
        ruoka.x - 10,
        ruoka.y + 20,
        ruoka.x - 5,
        ruoka.y + 25
    );
    ctx.stroke();
}

// Animaatiosilmukka
function animoi() {
    if (!peliKaynnissa) {
        return;
    }

    let uusiPala = {
        x: kaarme[0].x,
        y: kaarme[0].y
    };

    // Liikkuminen
    if (suunta === "oikea") {
        uusiPala.x += 20;
    }

    if (suunta === "vasen") {
        uusiPala.x -= 20;
    }

    if (suunta === "ylös") {
        uusiPala.y -= 20;
    }

    if (suunta === "alas") {
        uusiPala.y += 20;
    }

    // Törmäys seinään
    if (
        uusiPala.x < 0 ||
        uusiPala.x >= canvas.width ||
        uusiPala.y < 0 ||
        uusiPala.y >= canvas.height
    ) {
        peliKaynnissa = false;
        gameOver();
        return;
    }

    // Törmäys itseensä
    for (let i = 0; i < kaarme.length; i++) {
        if (
            uusiPala.x === kaarme[i].x &&
            uusiPala.y === kaarme[i].y
        ) {
            peliKaynnissa = false;
            gameOver();
            return;
        }
    }

    // Ruoka
    if (
        uusiPala.x === ruoka.x &&
        uusiPala.y === ruoka.y
    ) {
        kasvaa = true;

        pisteet++;
        pisteetTeksti.textContent = pisteet;

        ruoka.x = Math.floor(Math.random() * 20) * 20;
        ruoka.y = Math.floor(Math.random() * 20) * 20;
    }

    // Lisää uusi pää
    kaarme.unshift(uusiPala);

    // Jos ei syönyt, poista häntä
    if (kasvaa) {
        kasvaa = false;
    } else {
        kaarme.pop();
    }

    piirra();

    setTimeout(animoi, 200);
}


// Game Over -animaatio
function gameOver() {
    let alkuAika = performance.now();

    function vilkkuvaGameOver(aika) {
        if (peliKaynnissa) {
            return;
        }

        piirra();

        let kulunut = aika - alkuAika;

        // Teksti näkyy 0,5 sekuntia ja piiloutuu 0,5 sekunniksi
        if (Math.floor(kulunut / 500) % 2 === 0) {
            ctx.fillStyle = "red";
            ctx.font = "bold 40px Arial";
            ctx.textAlign = "center";

            ctx.fillText(
                "PELI PÄÄTTYI!",
                canvas.width / 2,
                canvas.height / 2
            );
        }

        requestAnimationFrame(vilkkuvaGameOver);
    }

    requestAnimationFrame(vilkkuvaGameOver);
}
// Käynnistä peli
function kaynnistaPeli() {
    kaarme = [
        { x: 200, y: 200 }
    ];

    ruoka = {
        x: 300,
        y: 300
    };

    suunta = "oikea";
    kasvaa = false;
    pisteet = 0;
    peliKaynnissa = true;

    pisteetTeksti.textContent = pisteet;

    piirra();
    animoi();
}


// Näppäimistötapahtumat
document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowUp" && suunta !== "alas") {
        suunta = "ylös";
    }

    if (event.key === "ArrowDown" && suunta !== "ylös") {
        suunta = "alas";
    }

    if (event.key === "ArrowLeft" && suunta !== "oikea") {
        suunta = "vasen";
    }

    if (event.key === "ArrowRight" && suunta !== "vasen") {
        suunta = "oikea";
    }
});


// Napit
uusiPeli.addEventListener("click", kaynnistaPeli);
pelaaUudelleen.addEventListener("click", kaynnistaPeli);