import express from 'express';
import {createProduct, getProuctAll, updatedProduct, deleteProduct} from "../controllers/controller.js"

const router = express.Router();

router.get("/", getProuctAll);
router.post("/", createProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct);

export default router;