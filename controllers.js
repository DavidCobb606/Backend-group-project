const { fetchItems } = require("./ebayApi/api");
exports.getEbayItems = (req, res, next) => {
  const { keyword } = req.query;
  console.log(keyword);
  fetchItems(keyword)
    .then(items => {
      res.status(200).send({ items });
    })
    .catch(err => {
      next(err);
    });
};
