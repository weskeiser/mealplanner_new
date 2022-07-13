import { Request, Response } from "express";
import {
  getAllProductsFromDB,
  addNewProductToDB,
  getOneProductFromDB,
  updateProductInDB,
  Product,
} from "@database/products";

export const getAllProductsService = () => {
  const allProducts = getAllProductsFromDB();
  return allProducts;
};

// Add typechecks
export const validateProductValuesService = (product: Product) => {
  const {
    name,
    description,
    serving,
    nutrients: {
      calories,
      protein,
      carbs: { total: totalCarbs, sugar, added_sugar },
      fat: {
        total: totalFat,
        saturated,
        trans,
        monounsaturated,
        polyunsaturated,
        cholesterol,
      },
      fiber,
      salt,
    },
    vitamins: {
      omega3,
      omega6,
      vitaminA,
      retinol,
      betacarotene,
      vitaminD,
      vitaminE,
      thiamine,
      riboflavin,
      niacin,
      vitaminB6,
      folate,
      vitaminB12,
      vitaminC,
      calcium,
      iron,
      sodium,
      potassium,
      magnesium,
      zinc,
      selenium,
      copper,
      phosphorus,
      iodine,
    },
    source,
  } = product;

  const values = [
    name,
    description,
    serving,
    calories,
    protein,
    totalFat,
    saturated,
    trans,
    monounsaturated,
    polyunsaturated,
    cholesterol,
    totalCarbs,
    sugar,
    added_sugar,
    fiber,
    salt,
    source,
    omega3,
    omega6,
    vitaminA,
    retinol,
    betacarotene,
    vitaminD,
    vitaminE,
    thiamine,
    riboflavin,
    niacin,
    vitaminB6,
    folate,
    vitaminB12,
    vitaminC,
    calcium,
    iron,
    sodium,
    potassium,
    magnesium,
    zinc,
    selenium,
    copper,
    phosphorus,
    iodine,
  ];
  const includesUndefinedValues = values.reduce((prev, curr) => {
    if (curr === undefined) {
      prev = true;
      return prev;
    }
    return prev;
  }, false);

  if (includesUndefinedValues) {
    throw {
      status: 400,
      message:
        "One or more of the following keys are missing: name, description, serving, calories,  protein, totalFat, saturated, trans, monounsaturated, polyunsaturated, cholesterol, totalCarbs, sugar, added_sugar, fiber, salt, source",
    };
  }
};

export const getOneProductService = (id: Product["id"]) => {
  try {
    const product = getOneProductFromDB(id);
    return product;
  } catch (error) {
    throw error;
  }
};

export const addNewProductService = (newProduct: Omit<Product, "updated">) => {
  try {
    const now = new Date().toISOString();

    const newProductToAdd = {
      ...newProduct,
      updated: now,
    };

    const addedProduct = addNewProductToDB(newProductToAdd);
    return addedProduct;
  } catch (error) {
    throw error;
  }
};

export const updateProductService = (
  productToUpdate: Omit<Product, "updated">
) => {
  const now = new Date().toISOString();

  const updatedProduct = updateProductInDB({
    ...productToUpdate,
    updated: now,
  });
  return updatedProduct;
};

export const deleteProductService = (req: Request, res: Response) => {
  return;
};
