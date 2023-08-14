let modals = [...document.querySelectorAll(".mod-list")];
let zIndexCounter = 1; // Initialize a counter for z-index values

modals.forEach((mod, idx) => {
    mod.addEventListener("click", (e) => {
        e.preventDefault();
        const modalsContainer = document.querySelector(".modals-container");
        const placeholder = modalsContainer.querySelector(".placeholder-image");
        const modal = modalsContainer.querySelector(
            `.modal[data-index="${idx}"]`
        );

        // Hide any previously displayed modals
        modalsContainer
            .querySelectorAll(".modal.active")
            .forEach((activeModal) => {
                activeModal.classList.remove("active");
            });

        // Hide the placeholder image
        placeholder.classList.add("hidden");

        // Display the clicked modal
        modal.classList.add("active");
        modal.style.zIndex = zIndexCounter;
        zIndexCounter++;

        if (!modal.classList.contains("active")) {
            zIndexCounter = 1;
        }
    });
});
