const request = require("supertest");
const app = require("../app.js");
describe("Error handling", () => {
  test("404: responds with an error when passed a non existant end point", () => {
    return request(app)
      .get("/api/non-existant")
      .expect(404)
      .then(({ body }) => {
        expect(body.msg).toBe("Route not found");
      });
  });
});
describe("GET /api/ebayCall", () => {
  test("return status 200 when successful", () => {
    return request(app)
      .get("/api/ebayCall")
      .expect(200);
  });
  test("return an object containing an item relating to one specified keyword", () => {
    return request(app)
      .get("/api/ebayCall?keyword=drone")
      .then(({ body }) => {
        const itemsArray = body.items;
        itemsArray.forEach(item => {
          expect.objectContaining({
            itemId: expect.any(String),
            title: expect.any(String),
            categories: expect.any(Array),
            image: expect.any(Object),
            price: expect.any(Object),
            thumbnailImages: expect.any(Array),
            shippingOptions: expect.any(Array),
            buyingOptions: expect.any(Array),
            itemWebUrl: expect.any(String),
            additionalImages: expect.any(Array),
            adultOnly: expect.any(Boolean)
          });
        });
      });
  });
  test("return an object containing an item relating to multiple specified keyword", () => {
    return request(app)
      .get("/api/ebayCall?keyword=gift electronics -card -cards")
      .then(({ body }) => {
        console.log(body);
        const itemsArray = body.items;
        itemsArray.forEach(item => {
          expect.objectContaining({
            itemId: expect.any(String),
            title: expect.any(String),
            categories: expect.any(Array),
            image: expect.any(Object),
            price: expect.any(Object),
            thumbnailImages: expect.any(Array),
            shippingOptions: expect.any(Array),
            buyingOptions: expect.any(Array),
            itemWebUrl: expect.any(String),
            additionalImages: expect.any(Array),
            adultOnly: expect.any(Boolean)
          });
        });
      });
  });
});