const syote = '   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quam.   ';
const hakusana = 'ipsum';

// 1. Trimmaa syöte
const teksti = syote.trim();
console.log('Teksti:', teksti);

// 2. Laske pituus
console.log('Pituus:', teksti.length);

// 3. Laske sanat split()-metodilla
const sanat = teksti.split(' ');
console.log('Sanoja:', sanat.length);

// 4. Sisältääkö teksti hakusanan
console.log(`Sisältää "${hakusana}":`, teksti.includes(hakusana));

// 5. Isoilla ja pienillä kirjaimilla
console.log('Isoilla:', teksti.toUpperCase());
console.log('Pienillä:', teksti.toLowerCase());

// 6. Ensimmäiset 20 merkkiä
console.log('Ensimmäiset 20 merkkiä:', teksti.slice(0, 20));