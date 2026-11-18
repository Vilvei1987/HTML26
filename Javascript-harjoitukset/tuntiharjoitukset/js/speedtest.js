import SpeedTest from "https://cdn.skypack.dev/@cloudflare/speedtest";
console.log(SpeedTest);
const testi = new SpeedTest({
    autoStart: false,
    measurements: [
        { type: "latency", numPackets: 20 },
        { type: "download", bytes: 1e7, count: 5 },
        { type: "upload", bytes: 1e7, count: 5 }
    ]
});
console.log(testi);
const aloitaNappi = document.getElementById("aloitaTesti");

const latausTulos = document.getElementById("lataus");
const lahetysTulos = document.getElementById("lahetys");
const pingTulos = document.getElementById("ping");
const jitterTulos = document.getElementById("jitter");

const tila = document.getElementById("tila");

aloitaNappi.addEventListener("click", function() {
    latausTulos.textContent = "-- Mbps";
    lahetysTulos.textContent = "-- Mbps";
    pingTulos.textContent = "-- ms";
    jitterTulos.textContent = "-- ms";
    tila.textContent = "Mittaus käynnissä...";
    testi.play();
    testi.onFinish = function(results) {
        const lataus = results.getDownloadBandwidth() / 1000000;
        const lahetys = results.getUploadBandwidth() / 1000000;
        const ping = results.getUnloadedLatency();const jitter = results.getUnloadedJitter();

    jitterTulos.textContent = jitter.toFixed(1) + " ms";
    pingTulos.textContent = ping.toFixed(1) + " ms";
    lahetysTulos.textContent = lahetys.toFixed(1) + " Mbps";
    latausTulos.textContent = lataus.toFixed(1) + " Mbps";
    console.log(results.getDownloadBandwidth());
    tila.textContent = "Mittaus valmis";
};
});