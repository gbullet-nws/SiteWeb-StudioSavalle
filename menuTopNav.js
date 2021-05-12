////-----------////
// Sticky HEADER //
////-----------////

// lorsque la page est scroll, appelle la fonction stickyHeader
window.onscroll = function() 
{
    stickyHeader();
};

// secltion de l'élement HTML par son id --> Header
var header = document.getElementsByClassName("header");

// Stocker la position offsetTop du header
var sticky = header.offsetTop;

// ajoute ou retire la class sticky à l'élément Header selon sa position sur la page
function stickyHeader() 
{
  if (window.pageYOffset > sticky) 
  {
    header.classList.add("sticky");
  } 
  else 
  {
    header.classList.remove("sticky");
  }
}


/* 

////---------------------------////
// //----// Menu Burger //----// //
////---------------------------////

function checkIsBurger(element) =>
{
    element.addEventListener('click', () => 
    {
        element.classList.toggle('isBurger');
    });
};

checkIsBurger(document.getElementById('element1'));
checkIsBurger(document.getElementById('element2'));
checkIsBurger(document.getElementById('element3'));
checkIsBurger(document.getElementById('element4'));

*/