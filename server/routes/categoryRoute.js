import express from "express";
import {
  createCategory,
  deleteCategory,
  getCategorie,
  getCategories,
  updateCategory,
} from "../controller/category.js";

const router = express.Router();

// Category
router.post("/create-category", createCategory);
router.get("/get-categories", getCategories);
router.post("/update-category/:id", updateCategory);
router.delete("/delete-category/:id", deleteCategory);
router.get("/get-category/:id", getCategorie);

//Product
router.post("/create-product", createCategory);

export default router;
