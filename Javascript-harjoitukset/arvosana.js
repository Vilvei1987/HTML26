let pisteet = 90;

if (pisteet >= 0 && pisteet <= 49) {
    console.log("Hylätty");
} 
else if (pisteet >= 50 && pisteet <= 69) {
    console.log("Tyydyttävä");
} 
else if (pisteet >=70 && pisteet <=89) {
    console.log("Hyvä");
}
else if (pisteet >=90 && pisteet <=100) {
    console.log("Kiitettävä");
}
else {
    console.log("Virheellinen luku");
}