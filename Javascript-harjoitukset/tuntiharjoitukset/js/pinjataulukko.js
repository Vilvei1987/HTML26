// 1. map – Kaksinkertaiset arvot
const luvut1 = [2, 4, 6];
console.log(luvut1.map(luku => luku * 2));


// 2. filter – Vähintään 10
const luvut2 = [4, 12, 8, 20];
console.log(luvut2.filter(luku => luku >= 10));


// 3. find – Ensimmäinen yli 10
const luvut3 = [2, 8, 15, 20];
console.log(luvut3.find(luku => luku > 10));


// 4. some – Onko negatiivisia?
const luvut4 = [4, -2, 8];
console.log(luvut4.some(luku => luku < 0));


// 5. reduce – Lukujen summa
const luvut5 = [2, 3, 5];
console.log(luvut5.reduce((summa, luku) => summa + luku, 0));


// 6. map – Hintojen 10 % alennus
const hinnat6 = [20, 40, 80];
console.log(hinnat6.map(hinta => hinta * 0.9));


// 7. filter – Vähintään viiden merkin nimet
const nimet7 = ['Li', 'Anna', 'Mikko', 'Eevi'];
console.log(nimet7.filter(nimi => nimi.length >= 5));


// 8. find – Ensimmäinen vapaa paikka
const paikat8 = [false, false, true, false];
console.log(paikat8.find(vapaa => vapaa === true));


// 9. every – Kaikki läpäisivätkö?
const pisteet9 = [67, 82, 49, 90];
console.log(pisteet9.every(piste => piste >= 50));


// 10. reduce – Ostoskorin summa
const kori10 = [12.5, 9.9, 3.6];
console.log(kori10.reduce((summa, hinta) => summa + hinta, 0));


// 11. sort – Nimet aakkosjärjestykseen
const nimet11 = ['Veera', 'Aino', 'Oona'];
console.log([...nimet11].sort());


// 12. sort – Suurin ensin
const luvut12 = [12, 3, 25, 8];
console.log([...luvut12].sort((a, b) => b - a));


// 13. indexOf – Etsi käyttäjän paikka
const nimet13 = ['Aino', 'Sara', 'Mika'];
console.log(nimet13.indexOf('Sara'));


// 14. includes – Onko tuote listalla?
const tuotteet14 = ['tee', 'mehu', 'kahvi'];
console.log(tuotteet14.includes('kahvi'));


// 15. reduce – Lämpötilojen keskiarvo
const lampotilat15 = [14, 18, 17, 21, 20];
const summa15 = lampotilat15.reduce((summa, lampotila) => summa + lampotila, 0);
console.log(summa15 / lampotilat15.length);


// 16. filter + map – Hyväksytyt opiskelijat
const opiskelijat16 = [
    { nimi: 'Aino', pisteet: 75 },
    { nimi: 'Mika', pisteet: 45 },
    { nimi: 'Sara', pisteet: 88 }
];

console.log(
    opiskelijat16
        .filter(opiskelija => opiskelija.pisteet >= 50)
        .map(opiskelija => opiskelija.nimi)
);


// 17. reduce – Kalleimman tuotteen hinta
const hinnat17 = [14, 29, 8, 41];
console.log(
    hinnat17.reduce((suurin, hinta) => hinta > suurin ? hinta : suurin, hinnat17[0])
);


// 18. filter – Parilliset ensin, parittomat sitten
const luvut18 = [1, 2, 3, 4, 5, 6, 7, 8];
const parilliset18 = luvut18.filter(luku => luku % 2 === 0);
const parittomat18 = luvut18.filter(luku => luku % 2 !== 0);
console.log([...parilliset18, ...parittomat18]);


// 19. reduce – Varaston kokonaisarvo
const tuotteet19 = [
    { hinta: 5, maara: 3 },
    { hinta: 8, maara: 2 },
    { hinta: 12, maara: 1 }
];

console.log(
    tuotteet19.reduce((summa, tuote) => summa + tuote.hinta * tuote.maara, 0)
);


// 20. filter + reduce – Tilastoraportti
const luvut20 = [12, 5, 18, 7, 20, 9];
const yliKymmenen20 = luvut20.filter(luku => luku > 10);

const maara20 = yliKymmenen20.length;
const summa20 = yliKymmenen20.reduce((summa, luku) => summa + luku, 0);
const keskiarvo20 = summa20 / maara20;

console.log("Yli 10 olevien lukujen määrä:", maara20);
console.log("Summa:", summa20);
console.log("Keskiarvo:", keskiarvo20);
