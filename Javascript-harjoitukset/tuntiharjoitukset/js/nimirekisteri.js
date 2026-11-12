const nimet = ['Sara', 'Aino', 'Mika'];
nimet.push('Oskari');

const loytyykoAino = nimet.includes('Aino');
const leevinIndeksi = nimet.indexOf('Leevi');

const kopioNimet = [...nimet];
kopioNimet.sort();

console.log(nimet.join(', '));
console.log(kopioNimet.join(', '));