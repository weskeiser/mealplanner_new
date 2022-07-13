export {
  getAllProductsService,
  getOneProductService,
  addNewProductService,
  updateProductService,
  deleteProductService,
  validateProductValuesService,
} from "./products.services";

export {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "./products.controllers";

export { default as v1ProductsRouter } from "./products.routes";
