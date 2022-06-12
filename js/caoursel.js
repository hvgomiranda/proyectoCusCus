//carousel
let slideIndex = 0;
carousel();

function carousel() 
{
  let i;
  let imagenFondo = document.getElementsByClassName("imagenFondo");
  for (i = 0; i < imagenFondo.length; i++) {imagenFondo[i].style.display = "none"};
  slideIndex++;
  if (slideIndex > imagenFondo.length) {slideIndex = 1};
  imagenFondo[slideIndex-1].style.display = "block";
  setTimeout(carousel, 3500); //cambia la imagen cada dos segundos
}