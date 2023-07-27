var text = ["New", "Retail", "Fresh", "Brand"];
let counter = 0;
const elem = document.getElementById("changeText");
setInterval(change, 2000);

function change() {
    elem.classList.add("hide");
    setTimeout(function () {
        elem.innerHTML = text[counter];
        elem.classList.remove("hide");
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }
    }, 500);
}
