

const { PythonShell } = require("python-shell");

const pyshell = new PythonShell("./Model/model.py", { mode: "json" });

exports.addWords = (body) => {

  
    const {positive, negative} = body
  
    
      if (positive.length === 0 || negative.length === 0){
       return Promise.reject({
            status: 400,
            msg: "Invalid input. Please make sure there is at least 1 word for both positive and negative."
        })
      }
     
      let options = {
        mode: "json",
        args: [positive, negative],
      };
    

//return new Promise
     return new Promise((resolve, reject) =>{
        
        try{
            PythonShell.run(
                __dirname + "/Model/model.py",
                options,
                function (err, [newKeyWords]) {
                 
                  return resolve(newKeyWords)    
                })        
        }
        catch{
            console.log("error running python code")
           reject()
        }

      }) 
      

}