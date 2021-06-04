////-----------------------////
// -- // Sticky HEADER // -- //
////-----------------------////

// lorsque la page est scroll, appelle la fonction stickyHeader
window.onscroll = function() 
{
  stickyHeader();
};

// selection de l'élement HTML par son id -> header
let navBar = document.getElementById("NavBar");

// Stocker la position offsetTop du menu de nav
let sticky = navBar.offsetTop;

// ajoute ou retire la class sticky à l'élément NavBar selon sa position sur la page
function stickyHeader() 
{
  if (window.pageYOffset > sticky) 
  {
    navBar.classList.add("sticky");
  } 
  else 
  {
    navBar.classList.remove("sticky");
  }
}



////---------------------------////
// //----// Menu Burger //----// //
////---------------------------////




/* 

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
