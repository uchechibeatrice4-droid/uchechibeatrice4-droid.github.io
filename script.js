document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {

        const navbarMenu = document.querySelector('#mainNav');

        if (navbarMenu.classList.contains('show')) {
            const navbarCollapse = new bootstrap.Collapse(navbarMenu, {
                toggle: false
            });

            navbarCollapse.hide();
        }

    });
});