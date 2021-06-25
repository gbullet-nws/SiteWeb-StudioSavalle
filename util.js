////---------------------------------////
// //----// Scroll Top Button //----// //
////--------------------------------////

//Get the button:
scrollTopButon = document.getElementById("scrollTopButon");

// When the user clicks on the button, scroll to the top of the document
function clickToGoTop() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera                 
}                                                                                               

/* ------------------------------------------ *//* ------------------------------------------ */
/* ------------------------------------------ *//* ------------------------------------------ */

 ////----------------------------------------////
// //----// increase product quantity //----// //
 ////---------------------------------------////

// Fonction d'ajout de quantité --> fiche produit

let quantiteProduit = 0;

function augmenterQuantite() 
{
    document.getElementById('quantiteProduit').value = ++quantiteProduit;
}
function reduireQuantite() 
{
    if (quantiteProduit === 0)
    {
        quantiteProduit = 0 ;
    }
    else
    {
        document.getElementById('quantiteProduit').value = --quantiteProduit;
    }
}