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
  //issue was to do with a module in ipynb file so copied code into .py file
  // and think this sorted it. console.logs in js work and can send and
  // receive data from python

  //both methods work so we just have to decide which we prefer: define options
  // with args key and send or send directly with .send

  //if nothing is coming back make sure it's the print is the last thing in the
  //python script

  //method 1

  // pyshell.send({ positive: ["king", "woman"], negative: ["man"] });
  // pyshell.on("message", (message) => res.send(message));

  // // pyshell.end(function (err, code, signal) {
  // //   if (err) throw err;
  // //   console.log("finished");
  // // });

  //method 2

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
