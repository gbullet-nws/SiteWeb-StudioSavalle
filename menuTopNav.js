////---------------------------////
// //----// Menu Burger //----// //
////---------------------------////

// resize the <div> of the burgerMenu when the opener button is clicked
// becasue the menuBurger <div> is over all others if not changed in .js
function resizeBurgerMenu() 
{
    let resizingBurgerMenu = document.getElementById("burgerMenuToggle") ;

    if (resizingBurgerMenu.classList.contains("burgerMenu-fullHeight")) 
    {
        resizingBurgerMenu.classList.remove("burgerMenu-fullHeight") ;
    }
    else 
    {
        resizingBurgerMenu.classList.add("burgerMenu-fullHeight")    ;
    }
}

/* ------------------------------------------ *//* ------------------------------------------ */
/* ------------------------------------------ *//* ------------------------------------------ */