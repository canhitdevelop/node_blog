/** @format */
const morgan = require("morgan");
const express = require("express");
const app = express();
const port = 3000;

app.use(morgan("combined"));
//runkit.com/
https: app.get("/trang-chu", (req, res) => {
  res.send(`
    <h1>Trang chủ</h1>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
