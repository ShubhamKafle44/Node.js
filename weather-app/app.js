const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const forecast = require("./utils/forecast.js");
const geocode = require("./utils/geocode.js");
argv = yargs(hideBin(process.argv))
  .command({
    command: "weather",
    describe: "Name of place for weather",
    demandOption: true,
    type: "string",
  })
  .parse();
address = argv.weather;
if (!address) {
  return console.log("Please Enter the address");
}
geocode(address, (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, weatherData) => {
    if (error) {
      return console.log("Connection to weather services failed");
    }
    console.log(data.location);
    console.log(weatherData.temperature);
  });
});
