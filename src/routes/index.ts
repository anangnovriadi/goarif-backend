import express from "express";
import { auth } from "../utils/middleware";
import { TestController } from "../controllers/testController";
import { UserController } from "../controllers/userController";
import { ProductController } from "../controllers/productController";

export const router = express.Router();

router.get("/health", TestController.checkHealth);
router.get("/generate-secret", TestController.createSecretToken);

router.post("/register", UserController.register);
router.post("/login", UserController.login);

router.get("/products", auth, ProductController.list);
router.get("/product/:id", auth, ProductController.detail);
router.post("/product", auth, ProductController.create);

export default router;
