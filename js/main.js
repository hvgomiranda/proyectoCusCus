//cambiar el color del logo y los íconos al abrir el menú
let logo = document.querySelector(".logoSVG");
let menu = document.querySelector("#menuToggle input");
let colorCambiado = 1;
menu.addEventListener("click", cambiarColor);
function cambiarColor()
{
    if(colorCambiado == 1)
    {
        document.querySelectorAll(".fa").forEach(e => e.style.color = "white");
        logo.style.filter = "invert(95%) sepia(59%) saturate(14%) hue-rotate(298deg) brightness(105%) contrast(103%)";
        colorCambiado = 0;
    }
    else
    {
        document.querySelectorAll(".fa").forEach(e => e.style.color = "#7b9a57");
        logo.style.filter = "invert(56%) sepia(19%) saturate(809%) hue-rotate(45deg) brightness(97%) contrast(91%)";
        colorCambiado = 1;
    }
}