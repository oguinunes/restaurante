import { Router } from "express";
import categoryController from "./category.controller.js";
import { Certificate } from "node:crypto";

const categoryRoutes = Router();

categoryRoutes.post("/", categoryController.create);
categoryRoutes.get("/", categoryController.findAll);

export default categoryRoutes;