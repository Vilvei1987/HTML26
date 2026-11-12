const opiskelijat = [
    { nimi: "Aino", pisteet: 82, aktiivinen: true },
    { nimi: "Mika", pisteet: 64, aktiivinen: false },
    { nimi: "Sara", pisteet: 78, aktiivinen: true }
];

const aktiiviset = opiskelijat.filter(opiskelija => opiskelija.aktiivinen);

console.log("Aktiiviset opiskelijat:");
console.log(aktiiviset);

const opiskelijaTekstit = aktiiviset.map(opiskelija =>
    `${opiskelija.nimi} – ${opiskelija.pisteet} p`
);

console.log("Opiskelijoiden pisteet:");
console.log(opiskelijaTekstit);

const pisteetYhteensa = aktiiviset.reduce((summa, opiskelija) =>
    summa + opiskelija.pisteet, 0
);

const maara = aktiiviset.length;

const keskiarvo = maara > 0 ? pisteetYhteensa / maara : 0;

console.log("Aktiivisten opiskelijoiden pisteet yhteensä:");
console.log(pisteetYhteensa);

console.log("Aktiivisten opiskelijoiden keskiarvo:");
console.log(keskiarvo);