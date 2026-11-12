let kirjautunut = true;
let admin = false;
let opettaja = false;

if (kirjautunut && (admin || opettaja)) {
    console.log("Muokkaus sallittu");
} else {
    console.log("Muokkaus ei sallittu");
}
