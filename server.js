const express = require("express");
const app = express();

const port = "http://localhost:3001";
let data = [{ 1: "1" }, { 2: "2" }];
app.use(express.json());

app.listen(3001, console.log("서버 연결완! " + port));

app.get("/", (_, res) => {
  res.json(data);
});
