//cambiar el color del logo y los íconos al abrir el menú
//let logo = document.querySelector(".logoSVG");
let logo = document.querySelector("#SvgjsG1008");
let circle = document.querySelector(".strokeChanged");
let string = document.querySelector(".stringColor");
let menu = document.querySelector("#menuToggle input");
let colorCambiado = 1;
menu.addEventListener("click", cambiarColor);
function cambiarColor()
{
    if(colorCambiado == 1)
    {
        document.querySelectorAll(".fajs").forEach(e => e.style.color = "#f5f5dc");
        logo.style.fill = "#f5f5dc";
        document.querySelectorAll(".colorChanged").forEach(f => f.style.fill = "#f5f5dc");
        circle.style.stroke = "#f5f5dc"
        string.style.stroke = "#f5f5dc"

        colorCambiado = 0;
    }
    else
    {
        document.querySelectorAll(".fajs").forEach(e => e.style.color = "#7b9a57");
        logo.style.fill = "#7b9a57";
        document.querySelectorAll(".colorChanged").forEach(f => f.style.fill = "#7b9a57");
        circle.style.stroke = "#7b9a57"
        string.style.stroke = "#7b9a57"
        colorCambiado = 1;
    }
}

$(document).ready(function()
{
    let height = $(window).height();

    $("#menu").height(height);
});