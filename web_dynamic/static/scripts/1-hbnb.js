let amenity_store = {}; // Initialize an empty object to store amenities

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
