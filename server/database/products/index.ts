export type { Product } from "./types";

export { saveToDatabase } from "./utils";

export {
  getAllProductsFromDB,
  addNewProductToDB,
  getOneProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
} from "./products.database";

import DB from "./products.json";
export { DB };
