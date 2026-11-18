const name = document.getElementById("name");
const preview = document.getElementById("preview");

name.addEventListener("input", function() {
    if (name.value === "") {
        preview.textContent = "vieras";
    } else {
        preview.textContent = name.value;
    }
});