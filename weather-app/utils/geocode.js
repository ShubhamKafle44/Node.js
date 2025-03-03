require("dotenv").config();
const request = require("request");
const geocode = (address, callback) => {
  const geolocationUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${process.env.GEOCODE_API}`;

  request({ url: geolocationUrl, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect");
    } else if (body.results.length == 0) {
      callback("Unable to find the location");
    } else {
      callback(undefined, {
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng,
        location: body.results[0].formatted_address,
      });
    }
  });
};
module.exports = geocode;
