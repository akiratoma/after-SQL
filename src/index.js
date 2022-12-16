import express from "express";
import cursoRouter from "./routes/cursoRouter.js";
import moduloRouter from "./routes/moduloRouter.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/curso", cursoRouter);
app.use("/api/modulo", moduloRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
