function show_menu() {
      const boton = document.getElementById("boton_show");
      const nav   = document.querySelector(".nav-header");
      nav.classList.toggle("active");
      boton.innerText = nav.classList.contains("active") ? "X" : "≡";
    }

    document.getElementById("year").innerText = new Date().getFullYear();