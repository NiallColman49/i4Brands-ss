let modals = [...document.querySelectorAll(".mod-list")];

modals.forEach((mod, idx) => {
    mod.addEventListener("click", () => {
        const placeholder = document.querySelector(".placeholder-image");

        placeholder.classList.add("hidden");
        console.log(placeholder);
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
