// Contains the JavaScript functionality unique to the Home page


// This is called from main.js (document ready)
// Should contain any page unique functionality 
function pageDocReady () {
   $('.slider').fractionSlider({
      'fullWidth':      true,
      'controls':       false, 
      'pager':        true,
      'responsive':       true,
      'dimensions':       "460,400",
      'increase':       false,
      'pauseOnHover':     false,
      'slideEndAnimation':  true
    });
}

