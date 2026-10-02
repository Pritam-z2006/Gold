const menuButtons = document.querySelectorAll(".menu-btn");


menuButtons.forEach(button => {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        const menuId = this.getAttribute("data-menu");
        const menu = document.getElementById(menuId);

        
        document.querySelectorAll(".dropdown-menu").forEach(dropdown => {
            if (dropdown !== menu) {
                dropdown.classList.remove("show");
            }
        });

        
        menu.classList.toggle("show");
    });
});


document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("menu-btn")) {
        document.querySelectorAll(".dropdown-menu").forEach(menu => {
            menu.classList.remove("show");
        });
    }
});