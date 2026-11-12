const tiedosto = 'raportti.PDF';

const pienet = tiedosto.toLowerCase();
console.log(pienet);

const onPdf = pienet.endsWith('.pdf');
console.log(onPdf);

const nimiIlmanPaatetta = tiedosto.slice(0, -4);
console.log(nimiIlmanPaatetta);