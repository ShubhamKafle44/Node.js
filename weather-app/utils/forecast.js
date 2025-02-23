require("dotenv").config();
const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const weatherUrl = `http://api.weatherstack.com/current?access_key=${process.env.WEATHER_API}&query=${latitude},${longitude}&units=f`;

  request({ url: weatherUrl, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to the weather service.");
    } else if (response.body.error) {
      callback("Unable to find the location");
    } else {
      callback(undefined, response.body.current);
    }
  });
};
module.exports = forecast;
