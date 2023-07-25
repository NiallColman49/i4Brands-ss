let modals = [...document.querySelectorAll(".mod-list")];

modals.forEach((mod, idx) => {
    mod.addEventListener("click", () => {
        let panel = mod.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.classList.remove("active");
            panel.style.maxHeight = null;
        } else {
            panel.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
