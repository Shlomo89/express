const express = require("express");

const route = express.Router();

route.use("/justLog", (req, res, next) => {
console.log("Just log");
res.redirect("/shop");
});

route.get("/", (req, res, next) => {
  res.send("<h1> Admin page </h1>");
});
// my second commit

module.exports = route;
