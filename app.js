const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const contact = require("./routes/contactRoute");
app.use("/api/v1", contact);
app.get("/api/v1", (req, res) => {
  res.send("Hello world");
});
module.exports = app;
