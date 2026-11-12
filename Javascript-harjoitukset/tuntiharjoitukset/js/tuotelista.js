const tuotteet = [
  { nimi: "Hiiri", hinta: 25, saldo: 4 },
  { nimi: "Näyttö", hinta: 240, saldo: 0 },
  { nimi: "Kaapeli", hinta: 12, saldo: 7 }
];
const saatavillaOlevat = tuotteet.filter(tuote => tuote.saldo > 0);

console.log(saatavillaOlevat);
const nimet = saatavillaOlevat.map(tuote => tuote.nimi);

console.log(nimet);
const korotetutHinnat = saatavillaOlevat.map(tuote => tuote.hinta * 1.255);

console.log(korotetutHinnat);
