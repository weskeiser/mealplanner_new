import express from "express";
import "dotenv/config";
import { v1ProductsRouter } from "@v1/products";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api/v1/products", v1ProductsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
