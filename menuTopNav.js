// Sticky HEADER //


// Menu  burger //

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