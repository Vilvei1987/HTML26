const pisteet = [60, 80, 95, 70, 85, 90];
const summa = pisteet.reduce((yhteensa, luku) => yhteensa + luku, 0);
console.log(summa);
const loytyykoYli95 = pisteet.some(piste => piste >= 95);
console.log(loytyykoYli95);
const onkokaikki = pisteet.every(piste => piste >= 0 && piste <= 100);
console.log(onkokaikki);
