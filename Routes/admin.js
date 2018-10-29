

const express = require("express");

const route = express.Router();

route.get("/product", (req, res) => {
 
  res.send(
    '<form action ="/admin/product" method = "POST" >  <h1> Add Product </h1>  <input type="text" name="item"> <button type ="submit" > Add</button>  </form>'
  );
});

route.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = route;
