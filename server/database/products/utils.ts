import fs from "fs";
import { Product } from "./";

export const saveToDatabase = (DB: Product[]) => {
  fs.writeFileSync(
    "./database/products/products.json",
    JSON.stringify(DB, null, 2),
    {
      encoding: "utf-8",
    }
  );
};
