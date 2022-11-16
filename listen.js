const app = require("./app");

const port = 8000;
app.listen(port, () => {
  return console.log(`server connected to ${port}`);
});
