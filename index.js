const dotenv = require("dotenv");
const cors = require("cors");
const app = require("./app");

dotenv.config();

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
