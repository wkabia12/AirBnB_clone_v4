let amenity_store = {}; // Initialize an empty object to store amenities
const url = 'http://0.0.0.0:5001/api/v1/status/';

$(document).ready(function() {
   $("input[type=checkbox]").click(function () {
    if (this.checked) {
      amenity_store[$(this).data('id')] = $(this).data('name'); // Add amenity to the storing object
      $(".amenities h4").text(Object.values(amenity_store).join(', ')); // Update the h4 tag with selected amenities
    } else {
      delete amenity_store[$(this).data('id')]; // Remove amenity from the storing object
      if (Object.values(amenity_store).length === 0) {
        $(".amenities h4").html("&nbsp;"); // If no amenities are selected, display an empty space
      } else {
        $(".amenities h4").text(Object.values(amenity_store).join(', ')); // Update the h4 tag with remaining selected amenities
      }
    }
  });
};
$.get(url, function (data, status) {
    if (status === 'success') {
      $('#api_status').addClass('available');
    }
  });
});
$.ajax({
    type: "POST",
    url: "http://0.0.0.0:5001/api/v1/places_search/",
    dataType: "json",
    contentType: "application/json",
    data: '{}',
    success: function (data, status, jQxhr) {
      for (let i = 0; i < data.length; i++) {
	let eachplace = data[i];
	console.log(eachplace);
	$(".places").append('<article><div class="title"><h2>'
				   + eachplace.name
				   + '</h2><div class="price_by_night">$'
				   + eachplace.price_by_night
				   + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />'
				   + eachplace.max_guest
				   + ' Guests'
				   + '</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />'
				   + eachplace.number_rooms
				   + ' Bedrooms'
				   + '</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />'
				   + eachplace.number_bathrooms
				   + ' Bathroom'
				   + '</div></div><div class="user"><strong>Owner: '
//				   + users[place.user_id]
				   +'</strong></div><div class="description">'
				   + eachplace.description
				   + '</div></article>');
	}
      }
    });
  });
