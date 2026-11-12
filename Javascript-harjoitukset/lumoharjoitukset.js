console.log ("tehtävä 1");
console.log ("Hei maailma!");

console.log ("=====");

console.log ("tehtävä 2");
const luku1 = 2;
const luku2 = 1;
const summa = luku1 + luku2;
console.log (luku1 + "+" + luku2 + "=" + summa);

console.log ("=====");

console.log ("tehtävä 3");
const erotus = luku1 - luku2;
console.log (luku1 + "-" + luku2 +"=" + erotus);

console.log ("=====");

console.log ("tehtävä 4");
const kertaa = luku1 * luku2;
console.log(luku1 + "*" + luku2 + "=" + kertaa);

console.log ("=====");

console.log ("tehtävä 5");
const jaettuna = luku1 / luku2;
console.log (luku1 + "/" + luku2 + "=" + jaettuna);

console.log ("=====");

console.log ("tehtävä 6");
const celsius = 44;
const fahrenheit = celsius * 9 / 5 + 32;
console.log (celsius + " celcius astetta on " + fahrenheit + " astetta fahrenheitia");

console.log ("=====");

console.log ("tehtävä 7");
const fahrenheit1 = 111.2;
const celsius1 = (fahrenheit - 32) * 5 / 9;
console.log (fahrenheit1 + " fahrenheit astetta on " + celsius1 + " astetta celsiusta");

console.log ("=====");

console.log ("tehtävä 8");
const maili = 1;
const kilometri = 1.6;
const kilometreiksi = kilometri * maili;

console.log (maili + " mailia on " + kilometreiksi + " kilometriä");

console.log ("=====");

console.log ("tehtävä 9");
const maileiksi = kilometreiksi / kilometri;
console.log(kilometreiksi + " kilometriä on " + maileiksi + " mailia");

console.log ("=====");

console.log("tehtävä 10");
const tuuma = 1;
const sentti = 2.54;
const senteiksi = sentti * tuuma;
console.log(tuuma + " tuumaa on " + senteiksi + " senttiä ");

console.log("=====");

console.log("tehtävä 11");
const tuumiksi = senteiksi / sentti;
console.log(senteiksi + " senttiä on " + tuumiksi + " tuumaa");

console.log ("=====");

console.log ("tehtävä 12");
const yardi = 1;
const metreiksi = 0.9144;
const metri = yardi * metreiksi;
console.log (yardi + " jaardia on " + metri + " metriä ");

console.log ("=====");

console.log ("tehtävä 13");
const takaisinYardeiksi = metri / metreiksi;
console.log(metri + " metriä on " + takaisinYardeiksi + " jaardia");

console.log ("=====");

console.log ("Silmukka tehtävät");

console.log ("tehtävä 1");
const lainasumma = 5000;
const lainaAika = 2;
const korko = 2;
const korkoDesimaali = korko / 100;
const vuosikorko = lainasumma * korkoDesimaali;
const kokonaiskorko = vuosikorko * lainaAika;
const takaisinMaksettava = lainasumma + kokonaiskorko;
console.log(`Kokonaiskorko on ${kokonaiskorko}€`);
console.log(`Takaisin maksettavaa on ${takaisinMaksettava}€`);

console.log ("=====");

console.log ("tehtävä 2");
const luku = 5;
let kertoma = 1;
for (let i = luku; i >= 1; i--) {
kertoma *= i;
}
console.log(kertoma);

console.log ("=====");

console.log ("tehtävä 4");
const sana = "Hevonen";
let kaannetty = "";
for (let i = 6; i >= 0; i--) {
    kaannetty += sana[i];
}
console.log(kaannetty);

console.log ("=====");

console.log ("tehtävä 6");
const numerot = [6, 7, 2, 4, 3, 8, 1];

let summa1 = 0;
for (let i = 0; i < numerot.length; i++) {
    summa1 += numerot[i];
}
const keskiarvo = summa1 / numerot.length;
console.log(summa1);
console.log(`Keskiarvo on ${keskiarvo}`);

console.log ("=====");

console.log ("tehtävä 10");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("viisitoista")
}
    else if (i % 3 === 0) {
        console.log("kolme")
    }

    else if (i % 5 === 0) {
    console.log("viisi")
}
}

console.log ("=====");

console.log ("tehtävä 11");
