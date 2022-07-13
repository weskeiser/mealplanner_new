import express from "express";
import {
  addNewProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
} from "./";

const router = express.Router();

// Get
router.get("/", getAllProducts);

router.get("/:id", getOneProduct);

// Post
router.post("/", addNewProduct);

// Patch
router.patch("/:id", updateProduct);

// Delete
router.delete("/:id", deleteProduct);

export default router;
