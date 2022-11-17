
const app = require("./app.js");
require("dotenv").config()



const {port = 9090} = process.env
app.listen(port, () => {
  console.log(`${port}`);
});
