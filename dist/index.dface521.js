const elHamburger = document.querySelector(".hamburger"), elNavigation = document.querySelector(".navigation");
elHamburger.addEventListener("click", ()=>{
    elHamburger.toggleAttribute("toggleNav");
    if (elNavigation.classList.contains("show")) {
        elNavigation.classList.add("closing");
        elNavigation.addEventListener("animationend", ()=>{
            elNavigation.classList.remove("closing");
            elNavigation.classList.remove("show");
        }, {
            once: true
        });
        return;
    }
    elNavigation.classList.add("show");
});

//# sourceMappingURL=index.dface521.js.map
