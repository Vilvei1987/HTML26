const data = ' HTML, CSS , JavaScript, React ';

const osat = data.split(',');
console.log(osat);

const puhtaat = osat.map(teknologia => teknologia.trim());
console.log(puhtaat);

const suodatetut = puhtaat.filter(teknologia => teknologia !== 'React');
const teksti = suodatetut.join(' | ');
console.log(teksti);