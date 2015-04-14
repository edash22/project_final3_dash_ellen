// Contains the JavaScript functionality unique to the Menu page


// This is called from main.js (document ready)
// Should contain any page unique functionality 
function pageDocReady () {
  setupLocationClick();

}

// Creates event handlers for the location icons.
// When clicked, updates the displayed name and associated google map.
function setupLocationClick () {
  // position the figcaption out of view
  var locationItems = $('.location a');

  for (i=0; i<locationItems.length; i++) {
    $(locationItems[i]).click(function (item) {
      var chosen = $(item.currentTarget).find('img');
      var altText = $(chosen).attr('alt');
      $('#location-name').text(altText);
      // TODO - update Google map with appropriate location

    });

  }
}