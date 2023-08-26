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
