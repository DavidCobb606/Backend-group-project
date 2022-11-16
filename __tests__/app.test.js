const request = require("supertest")
const app = require("../app.js")

jest.setTimeout(40000)

describe("POST /api/model", () => {
    test("Returns a 200 status and an array with 2 similar words when you input 1 positive and negative input ", () => {
        return request(app)
        .post("/api/model")
        .send({positive: ["king"], negative: ["peasant"]})
        .then(({body}) => {           
            expect(200)
            expect(body.length).toEqual(2)        
        })
    })
    test ("Returns a 200 status and an array with 2 similar words when you input any amount of positive words and at least 1 negative word.", () => {
        return request(app)
        .post("/api/model")
        .send({positive: ["king", "queen", "royal", "kingdom", "boy", "prince", "lord", "country"], negative: ["poor", "serf"]})
        .expect(200)
        .then(({body}) => {
            
            expect(body.length).toEqual(2)
        })
    })
    test("Return a 400 error if the arrays are empty", () => {
        return request(app)
        .post("/api/model")
        .send({positive: [], negative: []})
        .expect(400)
        .then(({body}) => {
            
            expect(body.msg).toBe("Invalid input. Please make sure there is at least 1 word for both positive and negative.")   

        })
    })

    test("Return a 400 error if the positive array is empty", () => {
        return request(app)
        .post("/api/model")
        .send({positive: [], negative: ["king"]})
        .expect(400)
        .then(({body}) => {
            
            expect(body.msg).toBe("Invalid input. Please make sure there is at least 1 word for both positive and negative.")
        })
    })

    test("Return a 400 error if the positive array is empty", () => {
        return request(app)
        .post("/api/model")
        .send({positive: ["king"], negative: []}) 
        .expect(400)
        .then(({body}) => {
           
            expect(body.msg).toBe("Invalid input. Please make sure there is at least 1 word for both positive and negative.")
        })
    })  

    test("Returns a 404 error if the word doesn't exist", () => {
        return request(app)
        .post("/api/model")
        .send({positive: ["Manchester"], negative: ["afasdflk"]})
        .expect(404)
        .then(({body})=>{
            
            expect(body.msg).toBe("One of the words in either positive or negative array does not exist in the data set. Please try a different word.")

        })
    })
})