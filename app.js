const express = require("express");
const fs = require("fs/promises");
const app = express();
const { postWords, addWords } = require("./controllers");

// const pyshell = new PythonShell("./Model/model.py", { mode: "json" });

let model = [];
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/ebayCall", getEbayItems)

app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Route not found" });
});

app.use((err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ msg: err.msg });
  } else next(err);
});

module.exports = app;
