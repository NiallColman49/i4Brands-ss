let accordions = [...document.querySelectorAll(".acc-list")];

accordions.forEach((acc, idx) => {
    acc.addEventListener("click", () => {
        let panel = acc.nextElementSibling;
        console.log(panel);
        if (panel.style.maxHeight) {
            panel.classList.remove("active");
            panel.style.maxHeight = null;
        } else {
            panel.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
