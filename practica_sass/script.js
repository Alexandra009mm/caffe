function show_menu() {
    var boton = document.getElementById("boton_show");
    var nav   = document.getElementsByClassName("nav_header");

    if (nav[0].classList.contains("active")) {
        boton.innerText = "X";
    } else {
        boton.innerText = "≡";
    }

    nav[0].classList.toggle("active"); // ← solo esto faltaba
}


// ── Fecha dinámica ────────────────────────────────
const year   = new Date();
const months = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];

document.getElementById("year").innerText =
    `${year.getDate()} de ${months[year.getMonth()]} del ${year.getFullYear()}`;