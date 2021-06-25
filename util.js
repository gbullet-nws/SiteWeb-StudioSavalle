////---------------------------------////
// //----// Scroll Top Button //----// //
////--------------------------------////

//Get the button:
scrollTopButon = document.getElementById("scrollTopButon");

/*

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() 
{
    scrollToTopFunction();
};

function scrollToTopFunction() 
{
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) 
  {
    scrollTopButon.style.display = "block";
  } 
  else 
  {
    scrollTopButon.style.display = "none";
  }
}

*/

// When the user clicks on the button, scroll to the top of the document
function clickToGoTop() 
{
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera                 
}                                                                                               

/* ------------------------------------------ *//* ------------------------------------------ */
/* ------------------------------------------ *//* ------------------------------------------ */