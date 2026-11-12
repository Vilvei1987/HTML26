const asetukset = { 
  id: 1, 
  teema: 'dark', 
  kieli: 'fi' 
};

console.log("--- 1. DESTRUCTURE ---");

const { teema, kieli } = asetukset;
console.log(`Teema: ${teema}, Kieli: ${kieli}`);


console.log("\n--- 2. OLETUSARVO ---");

const { fonttikoko = 16 } = asetukset;
console.log(`Fonttikoko (puuttuu): ${fonttikoko}`);

const asetukset2 = { ...asetukset, fonttikoko: 20 };
const { fonttikoko: koko20 = 16 } = asetukset2;
console.log(`Fonttikoko (arvo 20): ${koko20}`);

const asetukset3 = { ...asetukset, fonttikoko: null };
const { fonttikoko: kokoNull = 16 } = asetukset3;
console.log(`Fonttikoko (arvo null): ${kokoNull}`);


console.log("\n--- 3. REST ---");

const { id, ...loputAsetukset } = asetukset;
console.log("ID:", id);
console.log("Loput asetukset:", loputAsetukset);