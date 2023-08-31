const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("no-scroll");
    const menuStyles = document.querySelector(".overlay");
    e.target.classList.toggle("clicked");
    if (menuStyles.style.maxHeight === "0%") {
        menuStyles.style.maxHeight = "100%";
    } else {
        menuStyles.style.maxHeight = "0%";
    }
});

const additionalItems = document.querySelector(".additional-items");

additionalItems.addEventListener("click", (e) => {
    console.log("clicked");
    const icon = e.currentTarget;
    const hiddenItems = document.querySelector(".hidden-menu-item");
    console.log(hiddenItems);
    hiddenItems.classList.toggle("hidden");
});
