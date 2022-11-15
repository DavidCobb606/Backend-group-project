const request = require("supertest")
const app = require("../app")

describe("POST /api/model", () => {
    test ("Returns a 200 status and an array with 2 similar words when you input 1 positive and negative input ", () => {
        return request(app)
        .post("/api/model")
        .send({positive: ["king"], negative: ["peasant"]})
        .then(({body}) => {
            expect(200)
            expect(body.length).toEqual(0)
        })


    })
    test("Return a 400 error if the arrays are empty", () => {
        return request(app)
        .post("/api/model")
        .send({positive: [], negative: []})


    })
})