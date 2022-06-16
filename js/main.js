//cambiar el color del logo y los íconos al abrir el menú
let logo = document.querySelector(".logoSVG");
let menu = document.querySelector("#menuToggle input");
let colorCambiado = 1;
menu.addEventListener("click", cambiarColor);
function cambiarColor()
{
    if(colorCambiado == 1)
    {
        document.querySelectorAll(".fajs").forEach(e => e.style.color = "#f5f5dc");
        logo.style.filter = "invert(91%) sepia(19%) saturate(196%) hue-rotate(22deg) brightness(106%) contrast(92%)";
        colorCambiado = 0;
    }
    else
    {
        document.querySelectorAll(".fajs").forEach(e => e.style.color = "#7b9a57");
        logo.style.filter = "invert(56%) sepia(19%) saturate(809%) hue-rotate(45deg) brightness(97%) contrast(91%)";
        colorCambiado = 1;
    }
}

$(document).ready(function()
{
    let height = $(window).height();

    $("#menu").height(height);
});