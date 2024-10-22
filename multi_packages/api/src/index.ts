import express from "express";
import { add } from "@pkg/share/src/calc";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send(`Hello World! ${add(1, 2)}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
