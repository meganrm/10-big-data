(function(module) {
  function Zip(opts){
    this.zip = opts.properties.zip;
    this.neighborhood = opts.properties.neighborhood;
    this.address = opts.properties.address;
    this.coordinates = opts.geometry.coordinates
  }

    Zips = []

  // Transform the initial collection into
  // a new array of objects with just the properties we specify below.
  //
  // - The zip code
  // - Its neighborhood
  // - Its address (if applicable, otherwise null)
  // - Ensure that this new collection also contains the coordinates for each zip. The "coordinates" property should be its own object with "lat" and "lng" properties since we'd like to incorporate Google Maps later.

  getData = function() {
    $.getJSON('/data/manhattan.json', function(data) {
      // TODO: start here!
      console.log(data);
      data.features.forEach(function(ele){
        Zips.push(new Zip(ele));
      });
    });
  };

  getData();
  module.Zip = Zip;
})(window);
