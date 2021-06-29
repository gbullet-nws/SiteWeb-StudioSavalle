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

/* ------------------------------------------ *//* ------------------------------------------ */
/* ------------------------------------------ *//* ------------------------------------------ */

  /////--------------------------/////
 // //----// SLICK SLIDER //----// //
/////--------------------------/////

$(function()
{
    $('.slider-slick-1').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        centerPadding: '60px',
        variableWidth: true,
        variableheight: true,
        mobileFirst: true,
        responsive:
        [
            {
                breakpoint: 1024,
                settings: 
                {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    centerPadding: '0px',
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: 
                {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 400,
                settings: 
                {
                    slidesToShow: 1,
                    slidesToScroll: 4,
                }
            }
        ],
    });
});

$(window).resize(function()
{
    $('.slider-slick-1')[0].slick.refresh();
});