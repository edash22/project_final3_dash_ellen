// Contains the JavaScript functionality unique to the Menu page


// This is called from main.js (document ready)
// Should contain any page unique functionality 
function pageDocReady () {
  // associate pop up dialog with menu items
  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true
  });
}



