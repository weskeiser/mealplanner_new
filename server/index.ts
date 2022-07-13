import express from "express";
import "dotenv/config";

// import v1ProductsRouter from "./v1/routes/productsRoutes";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
