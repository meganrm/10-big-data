(function(module) {
  function Zip(opts){
    this.zip = opts.properties.zip;
    this.neighborhood = opts.properties.neighborhood;
    if (opts.properties.address){
      this.address = opts.properties.address;
    }
    else {
      this.address = null;
    }
    this.coordinates = {
      lat :     opts.geometry.coordinates[0],
      lng :     opts.geometry.coordinates[1]
    };
  }

  Zip.allZips = [];

  getData = function() {
    $.getJSON('/data/manhattan.json', function(data) {
      // TODO: start here!
      // console.log(data);
      data.features.forEach(function(ele){
        Zip.allZips.push(new Zip(ele));
      });
      console.log(Zip.topZips().splice(0,5));

    });
  };

  Zip.neighborhoodZips = function(){
    return Zip.allZips.reduce(function(acc, cur, index, array){
      if (!acc.find(function(ele){
        return ele.neighborhood === cur.neighborhood;
      })) {
        obj = {};
        obj.neighborhood = cur.neighborhood;
        obj.zips = 1;
        acc.push(obj);
      }
      else {
        // console.log('already in array');
        currentIndex = acc.findIndex(function(ele){
          return ele.neighborhood === cur.neighborhood;
        }
        );
        acc[currentIndex].zips = acc[currentIndex].zips + 1;
      }
      return acc;
    }, []);
  };

  Zip.topZips = function(){
    return Zip.neighborhoodZips().sort(function(a, b){
      return b.zips - a.zips;
    });
  };



  getData();
  module.Zip = Zip;

})(window);
