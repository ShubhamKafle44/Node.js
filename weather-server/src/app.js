const express = require("express");
const path = require("path");
const hbs = require("hbs");
const publicDirectoryPath = path.join(__dirname, "../public");

const viewPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");
const app = express();

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
  res.send({ forecast: "Shubham", location: "21" });
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
