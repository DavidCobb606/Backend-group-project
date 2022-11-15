const {addWords} = require("./models")

exports.postWords = (req,res, next) => {

    const {body} = req


    addWords(body)
    .then((newKeyWords) => {      
     
        res.status(200).send(newKeyWords)        
        
    })
    .catch(next)
    
   
     
}
     
    
