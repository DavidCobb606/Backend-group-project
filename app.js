const express = require("express");
const fs = require("fs/promises");
const app = express();

const { PythonShell } = require("python-shell");

const pyshell = new PythonShell("./Model/model.py", { mode: "json" });

let model = [];
app.use(express.json());
app.post("/", (req, res, next) => {
  const {
    body: { positive, negative },
  } = req;
 
  let options = {
    mode: "json",
    // pythonOptions: ["-u"],
    // scriptPath: "./Model",
    args: [positive, negative],
  };
  PythonShell.run(
    __dirname + "/Model/model.py",
    options,
    function (err, [newKeyWords]) {
      if (err) throw err;
      res.send({ newKeyWords });
    }
  );
});

const port = 8000;
app.listen(port, () => {
  return console.log(`server connected to ${port}`);
});
