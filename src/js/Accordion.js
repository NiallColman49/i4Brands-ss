let accordions = [...document.querySelectorAll(".acc-list")];

accordions.forEach((acc, idx) => {
    acc.addEventListener("click", (e) => {
        e.preventDefault();
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
