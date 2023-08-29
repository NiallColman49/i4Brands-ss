const touchElements = document.querySelectorAll(".touch-element");

touchElements.forEach((touchElement) => {
    touchElement.addEventListener("click", function (event) {
        const allHoverTitles = document.querySelectorAll(".hover-title");
        const hoverTitle = this.querySelector(".hover-title");

        if (hoverTitle) {
            allHoverTitles.forEach((title) => {
                let indiTitle = title.classList[0];
                console.log(title);
                if (indiTitle !== indiTitle) {
                    title.classList.remove("opacity-0");
                    title.classList.add("mobile-hover");
                } else {
                    hoverTitle.classList.toggle("opacity-0");
                    hoverTitle.classList.toggle("mobile-hover");
                }
            });
        }
    });
});
