// Contains the JavaScript functionality unique to the Menu page


// This is called from main.js (document ready)
// Should contain any page unique functionality 
function pageDocReadyALT () {
  // google map container
  //$('.gmap').mobileGmap();
  $('.gmap').mobileGmap({
    markers: [
        {
          position: 'center',
          info: '<h2>Pizza Planet</h2>4575 Military Trail<br>Jupiter, FL 33458',
          showInfo: true
        }
      ]
  });

  setupLocationClick();

}

function pageDocReady () {
  // google map container
  //$('.gmap').mobileGmap();
  $('#gmap-jupiter').mobileGmap({
    markers: [
        {
          position: 'center',
          info: '<h2>Pizza Planet</h2>4575 Military Trail<br>Jupiter, FL 33458',
          showInfo: true
        }
      ]
  });


  $('#gmap-mercury').mobileGmap({
    markers: [
        {
          position: 'center',
          info: '<h2>Pizza Planet</h2>36 Shields Rd<br>Huntsville, AL 35811',
          showInfo: true
        }
      ]
  });
  // need map to be showing to initialize. So create, then hide.
  $('#details-mercury').hide();

  $('#gmap-saturn').mobileGmap({
    markers: [
        {
          position: 'center',
          info: '<h2>Pizza Planet</h2>726 E Sarah Dewitt Drl<br>Gonzales, TX 78629',
          showInfo: true
        }
      ]
  });
  // need map to be showing to initialize. So create, then hide.
  $('#details-saturn').hide();

  setupLocationClick();

}

// Creates event handlers for the location icons.
// When clicked, updates the displayed name and associated google map.
function setupLocationClick () {
  // position the figcaption out of view
  var locationItems = $('.article-icon a');

  for (i=0; i<locationItems.length; i++) {
    $(locationItems[i]).click(function (item) {
      var chosen = $(item.currentTarget).find('img');
      var altText = $(chosen).attr('alt');
      $('#location-name').text(altText);
      
      // display the appropriate map section

      // hide the current map & show the selected map

      var hideThis = $('.current');
      var showThis = $('#details-' + altText.toLowerCase());
      hideThis.removeClass('current');
      showThis.addClass('current');

      $(hideThis).hide();
      $(showThis).show();      // update the map
      if (altText == "Jupiter") {
        // nothing here ... jupiter seems to always work
      }
      else if (altText == "Mercury") {
        $('#gmap-mercury').mobileGmap({
    markers: [
        {
          position: 'center',
          info: '<h2>Pizza Planet</h2>36 Shields Rd<br>Huntsville, AL 35811',
          showInfo: true
        }
      ]
  });
      }
      else {  // default to Saturn
        $('#gmap-saturn').mobileGmap({
    markers: [
        {
          position: 'center',
          info: '<h2>Pizza Planet</h2>726 E Sarah Dewitt Drl<br>Gonzales, TX 78629',
          showInfo: true
        }
      ]
  });
      } 

      

    });

  }
}

function setupLocationClickALT () {
  // position the figcaption out of view
  var locationItems = $('.article-icon a');

  for (i=0; i<locationItems.length; i++) {
    $(locationItems[i]).click(function (item) {
      var chosen = $(item.currentTarget).find('img');
      var altText = $(chosen).attr('alt');
      $('#location-name').text(altText);
      
      // display the appropriate map section

      // hide the current map & show the selected map

      var hideThis = $('.current');
      var showThis = $('#details-' + altText.toLowerCase());
      hideThis.removeClass('current');
      showThis.addClass('current');

      $(hideThis).hide(400);
      $(showThis).show(400);

      // update the map
      if (altText == "Jupiter") {
        $('.gmap').mobileGmap({
          markers: [
              {
                position: 'center',
                info: '<h2>Pizza Planet</h2>4575 Military Trail<br>Jupiter, FL 33458',
                showInfo: true
              }
            ]
        });
      }
      else if (altText == "Mercury") {
        $('.gmap').mobileGmap({
          markers: [
              {
                position: 'center',
                info: '<h2>Pizza Planet</h2>36 Shields Rd<br>Huntsville, AL 35811',
                showInfo: true
              }
            ]
        });
      }
      else {  // default to Saturn
        $('.gmap').mobileGmap({
          markers: [
              {
                position: 'center',
                info: '<h2>Pizza Planet</h2>726 E Sarah Dewitt Drl<br>Gonzales, TX 78629',
                showInfo: true
              }
            ]
        });
      } 

    });

  }
}