const nappi = document.querySelector("button");

nappi.addEventListener("click", function () {
    console.log(this.dataset.id);
    console.log(this.dataset.name);
});