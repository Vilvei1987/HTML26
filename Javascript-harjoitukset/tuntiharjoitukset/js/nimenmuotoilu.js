const nimi = '   aino virtanen   ';

const puhdas = nimi.trim();
console.log(puhdas);

const pienet = puhdas.toLowerCase();
console.log(pienet);

const pituus = pienet.length;
console.log(pituus);

console.log(pienet[0]);
console.log(pienet[pituus - 1]);
