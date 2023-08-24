const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        const icon = this.querySelector(".icon");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            icon.style.transform = "rotate(0deg)";
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            icon.style.transform = "rotate(45deg)";
        }
    });
}
