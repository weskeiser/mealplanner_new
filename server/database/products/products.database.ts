import { Product, saveToDatabase, DB } from "./";

export const getAllProductsFromDB = () => {
  try {
    return DB;
  } catch (error: any) {
    throw { status: 500, message: error.message || error };
  }
};

export const addNewProductToDB = (newProduct: Omit<Product, "id">) => {
  try {
    const { name, description } = newProduct;

    const alreadyExists = DB.some(
      (product) => name === product.name && description === product.description
    );

    if (alreadyExists)
      throw {
        status: 400,
        message: `Product with name '${name}' and description '${description}' already exists in database.`,
      };

    const newId = DB[DB.length - 1].id + 1;

    (DB as Product[]).push({ id: newId, ...newProduct });

    saveToDatabase(DB as Product[]);

    return newProduct;
  } catch (error: any) {
    throw { status: 500, message: error.message || error };
  }
};

export const getOneProductFromDB = (id: Product["id"]) => {
  try {
    const product = DB.find((product) => id === product.id);

    if (!product)
      throw {
        status: 400,
        message: `Product with ID ${id} not found in database.`,
      };

    return product;
  } catch (error: any) {
    throw {
      status: error.status || 500,
      message: error.message || error,
    };
  }
};

export const updateProductInDB = (productToUpdate: Product) => {
  try {
    const id = productToUpdate.id;

    const indexForUpdate = DB.findIndex((product) => id === product.id);

    if (indexForUpdate === -1)
      throw {
        status: 400,
        message: `Unable to find product with ID of ${id}`,
      };

    const updatedProduct = {
      ...DB[indexForUpdate],
      ...productToUpdate,
    };

    (DB as Product[])[indexForUpdate] = updatedProduct;

    saveToDatabase(DB as Product[]);

    return updatedProduct;
  } catch (error: any) {
    throw { status: error.status || 500, message: error.message || error };
  }
};

export const deleteProductFromDB = (id: Product["id"]) => {
  return;
};
