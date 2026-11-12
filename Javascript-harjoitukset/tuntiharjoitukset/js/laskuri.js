const miinus = document.getElementById("miinus");
const plus = document.getElementById("plus");
const count = document.getElementById("count");

let numero = 0;

plus.addEventListener("click", function() {
    numero++;
    count.textContent = numero;

    miinus.disabled = false;
});
miinus.addEventListener("click", function() {
    if (numero > 0) {
        numero--;
        count.textContent = numero;
    }

    miinus.disabled = numero === 0;
});