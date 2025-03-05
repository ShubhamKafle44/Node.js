const express = require("express");
const path = require("path");
const hbs = require("hbs");
const geocode = require("../utils/geocode");
const forecast = require("../utils/forecast");

const app = express();

const publicDirectoryPath = path.join(__dirname, "../public");

const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.use(express.static(publicDirectoryPath));
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    body: "WElcome to my app",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
    body: "HEllo My name is Shubham",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    message: "Hi user How can i help you. ",
  });
});

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({ error: "Enter an address" });
  }

  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error: error });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          res.send({ error: error });
        }

        res.send({
          forecast: forecastData,
          location,
          address: req.query.address,
        });
      });
    }
  );
});

app.get("/*", (req, res) => {
  res.render("notfound", {
    title: "ERROR CODE 404",
    body: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("server is on  port 3000.");
});
