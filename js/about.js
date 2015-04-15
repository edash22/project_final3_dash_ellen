// Contains the JavaScript functionality unique to the Menu page


// This is called from main.js (document ready)
// Should contain any page unique functionality 
function pageDocReady () {
  setupAboutClick();

}

// Creates event handlers for the about icons.
// When clicked, displays details for item.
function setupAboutClick () {
  // position the figcaption out of view
  var aboutItems = $('.article-icon a');

  for (i=0; i<aboutItems.length; i++) {
    $(aboutItems[i]).click(function (item) {
      var chosen = $(item.currentTarget).find('img');
      var altText = $(chosen).attr('alt');

      $('#about-name').text(altText);
      // hide the current section & show the selected section

      var hideThis = $('.current');
      var showThis = $('#about-' + altText.toLowerCase());
      hideThis.removeClass('current');
      showThis.addClass('current');

      $(hideThis).hide(400);
      $(showThis).show(400);

    });

  }
}