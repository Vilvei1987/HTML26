const tuotteet = [
  { id: 1, nimi: "Adapteri", hinta: 12.50, saldo: 15 },
  { id: 2, nimi: "Kaapeli", hinta: 5.90, saldo: 0 },
  { id: 3, nimi: "Muuntaja", hinta: 14.90, saldo: 8 },
  { id: 4, nimi: "Piirilevy", hinta: 24.50, saldo: 3 }
];

function etsiTuote(id, taulukko) {
  const tuote = taulukko.find(t => t.id === id);
  if (tuote) {
    console.log(`Löytyi:`, tuote);
  } else {
    console.log(`Tuotetta ID:llä ${id} ei löytynyt.`);
  }
}

console.log("--- HAKU ---");
etsiTuote(2, tuotteet);
etsiTuote(99, tuotteet);

const paivitetytTuotteet = tuotteet.map(tuote => {
  if (tuote.id === 2) {
    return { ...tuote, hinta: 19.90 };
  }
  return tuote;
});

console.log("--- PÄIVITYS (Uusi taulukko) ---");
console.log("Alkuperäinen id 2:", tuotteet.find(t => t.id === 2));
console.log("Päivitetty id 2:", paivitetytTuotteet.find(t => t.id === 2));