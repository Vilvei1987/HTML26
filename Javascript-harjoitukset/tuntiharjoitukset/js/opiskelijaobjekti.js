const opiskelija = {
  nimi: "Aino",
  ikä: 20,
  koulutusala: "Ohjelmistokehitys",
  aktiivinen: true,
  yhteystiedot: {
    sahkoposti: "aino.esimerkki@esimerkki.fi",
    puhelin: "040 1234567"
  }
};

opiskelija.ikä = 21;
opiskelija.pisteet = 82;

opiskelija.esittele = function() {
  console.log(`Nimi: ${this.nimi}, Ikä: ${this.ikä}, Koulutusala: ${this.koulutusala}, Aktiivinen: ${this.aktiivinen}, Pisteet: ${this.pisteet}, Sähköposti: ${this.yhteystiedot.sahkoposti}, Puhelin: ${this.yhteystiedot.puhelin}`);
};

opiskelija.esittele();