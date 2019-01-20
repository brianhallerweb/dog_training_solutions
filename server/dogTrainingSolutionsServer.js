const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("../public"));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/index.html"))
);

const port = 3010
app.listen(port, () => {
  console.log(`Dog training solutions server running on port ${port}...`);
});

module.exports = app;
