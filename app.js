const express = require("express");
const app = express();
const port = 3000;
const routing = require("./routes/index");

app.use("/", routing);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
