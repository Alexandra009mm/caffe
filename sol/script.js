 function toggleMenu() {
            const nav = document.getElementById('nav-menu');
            nav.classList.toggle('open'); /* agrega o quita la clase "open" */
        }

        /* Cierra el menú al hacer clic en un enlace (útil en móvil) */
        document.querySelectorAll('.nav-header a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('nav-menu').classList.remove('open');
            });
        });