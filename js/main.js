$( document ).ready(function() {
    console.log( "ready" );

    // run page specific functions
    pageDocReady();

    // this applies to all pages
    adjustNavStyles();
});

function adjustNavStyles() {
    var width = $(window).width();
    // thought the width should be the same as media query, but there is some kind of difference
    // possibly due to width of scroll bar? so ... reducing the check by 19 pixels, assuming the 
    // scroll is 20 px
    // SO ... what would happen if there was no scroll present? this would be off by 19 px. 
    // is there a way to check for scroll bar present?
   if (width < 1081) {
       $('.main-nav').addClass('btn');
   }
   else {
       $('.main-nav').removeClass('btn');
   }
}

/******************************
*  Event Listeners
******************************/

// Item: Window
// Trigger: resize
// Action: Adjust navigation style classes

window.addEventListener("resize", adjustNavStyles);

