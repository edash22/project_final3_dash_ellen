// Contains the JavaScript functionality unique to the Menu page


// This is called from main.js (document ready)
// Should contain any page unique functionality 
function pageDocReady () {
  $('.open-popup-link').magnificPopup({
    type:'inline',
    midClick: true
  });

   setupMenuHover();
}


function setupMenuHover () {
  // position the figcaption out of view
  var menuItems = $('.menu-category');
  var fig, figCaption;
  for (i=0; i<menuItems.length; i++) {
    fig = $(menuItems[i]).find('img')[0];

    // now, setup the hover event handler
    // note the need to dynamically determine figCaption

    $(fig).hover(function(item) {
      var figCaption = item.target.nextElementSibling;
      $(figCaption).removeClass('hide-caption');
    }, function(item) {
      var figCaption = item.target.nextElementSibling;
      $(figCaption).addClass('hide-caption');
    });
  }
}


