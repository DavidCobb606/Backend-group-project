const express = require("express");

const app = express();

const { PythonShell } = require("python-shell");

const pyshell = new PythonShell("./Model/model.py");

app.get("/", (req, res, next) => {
  //issue was to do with a module in ipynb file so copied code into .py file
  // and think this sorted it. console.logs in js work and can send and
  // receive data from python

  //both methods work so we just have to decide which we prefer: define options
  // with args key and send or send directly with .send

  //if nothing is coming back make sure it's the print is the last thing in the
  //python script

  //method 1
  pyshell.send("Trying this out");
  pyshell.on("message", (message) => res.send(message));

  pyshell.end(function (err, code, signal) {
    if (err) throw err;
    console.log("finished");
  });

  //method 2

  let options = {
    mode: "text",
    // pythonOptions: ["-u"],
    // scriptPath: "./Model",
    args: ["argument"],
  };
  PythonShell.run(
    __dirname + "/Model/model.py",
    options,
    function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    }
  );
});

const port = 8000;
app.listen(port, () => console.log(`server connected to ${port}`));
