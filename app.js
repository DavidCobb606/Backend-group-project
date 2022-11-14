const express = require("express")

const app=express()

const {PythonShell} = require("python-shell")

const pyshell = new PythonShell("./Model/model.ipynb")

app.get("/", (req,res,next) => {

    let options = {
        mode: "text",
        pythonOptions: ["-u"], 
            scriptPath: "./Model",
        args: ["argument"]
    };

  
        
    // PythonShell.run("model.ipynb", options, function (err, result){

    //     if(err) throw err;
    //     console.log("finished")
    //     // console.log(result)
    //  res.send(result.toString())

    // })


})  
pyshell.send("Hello")
        

    pyshell.on('message', function (message) {
        // received a message sent from the Python script (a simple "print" statement)
        console.log(message + "hey for the third time");
      });


    pyshell.end()

const port=8000;
app.listen(port, () => console.log(`server connected to ${port}`))