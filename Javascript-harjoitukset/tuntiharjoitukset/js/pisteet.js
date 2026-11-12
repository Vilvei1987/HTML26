const pisteet = [60, 80, 95, 70, 85, 90];
if (pisteet.length === 0) {
    console.log("Ei pisteitä.");
} else {
    let summa = 0;
    for (let i = 0; i < pisteet.length; i++) {
        summa += pisteet[i];
    }
    const keskiarvo = summa / pisteet.length;
    console.log(`Summa on ${summa} ja keskiarvo ${keskiarvo}.`);
}