const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

function show_menu() {
    var boton = document.getElementById("boton_show");
    var nav   = document.getElementsByClassName("nav_header");

    if (nav[0].classList.contains("active")) {
        boton.innerText = "≡";
    } else {
        boton.innerText = "x";
    }

    nav[0].classList.toggle("active"); // ← solo esto faltaba
}