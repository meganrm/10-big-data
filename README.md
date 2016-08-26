### Big Data with geoJSON

The goal for this assignment is to simulate a data set that you may
encounter during project week.

_Let's focus only on transforming this collection. No need to
invoke a constructor, or pass off control to the View._

**Start simple**:

1. Transform the initial collection into
a new array of objects with just the properties we specify below.

- The zip code
- Its neighborhood
- Its address (if applicable, otherwise null)
- Ensure that this new collection also contains the coordinates for each zip. The "coordinates" property should be its own object with "lat" and "lng" properties since we'd like to incorporate Google Maps later.

Finally, populate a top five array of neighborhood objects (in descending order) based on the neighborhoods that claim the most zip codes. Each object should have two properties: the neighborhood, and the total number of zip codes. For example, the first element in the top five array should be an object with a "neighborhood" property equal to Midtown, and a "total" property equal to 37.
