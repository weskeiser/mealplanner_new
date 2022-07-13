import { Request, Response } from "express";
import {
  getAllProductsService,
  getOneProductService,
  addNewProductService,
  updateProductService,
  deleteProductService,
  validateProductValuesService,
} from "./";

export const getAllProducts = (req: Request, res: Response) => {
  try {
    const allProducts = getAllProductsService();
    res.send({ status: "OK", data: allProducts });
  } catch (error: any) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error.message || error } });
  }
};

export const getOneProduct = (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter 'id' is missing. " },
    });
  }

  try {
    const product = getOneProductService(parseInt(id));
    res.send({ status: "OK", data: product });
  } catch (error: any) {
    res
      .status(error.status || 500)
      .send({ status: "FAILED", data: { error: error.message || error } });
  }
};

export const addNewProduct = (req: Request, res: Response) => {
  try {
    const productToAdd = req.body;

    validateProductValuesService(productToAdd);

    const addedProduct = addNewProductService(productToAdd);

    res.status(201).send({ status: "OK", data: addedProduct });
  } catch (error: any) {
    res.status(error.status || 500).send(error.message || error);
  }
};

export const updateProduct = (req: Request, res: Response) => {
  try {
    console.log("here");
    const productToUpdate = req.body;

    validateProductValuesService(productToUpdate);

    if (!req.body.id)
      throw {
        status: 400,
        message: "Parameter 'id' is missing",
      };

    const updatedProduct = updateProductService(productToUpdate);

    res.send({ status: "OK", data: updatedProduct });
  } catch (error: any) {
    res.status(error.status || 500).send(error.message || error);
  }
};

export const deleteProduct = (req: Request, res: Response) => {
  deleteProductService(req, res);
  res.send("Delete product");
};
