const {addWords} = require("./models")

exports.postWords = (req,res, next) => {

    const {body} = req


    addWords(body)
    .then((newKeyWords) => {      
     console.log("controller then")
     console.log(newKeyWords)
     if (typeof newKeyWords === "string"){
        return Promise.reject({
            status:404,
            msg: "One of the words in either positive or negative array does not exist in the data set. Please try a different word."
        })
       
      }
        res.status(200).send(newKeyWords)        
        
    })
    .catch(next)  
     
}
     
    
