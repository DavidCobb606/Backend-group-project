const express = require("express");
const app = express();
const { getEbayItems } = require("./controllers");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/api/ebayCall", getEbayItems);
app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Route not found" });
});
app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
});
module.exports = app;
