import { Router } from "express";
import categoryController from "./category.controller.js";

const categoryRoutes = Router();

// Criar categoria
categoryRoutes.post("/", categoryController.create);

// Listar todas as categorias
categoryRoutes.get("/", categoryController.findAll);

// Buscar uma categoria específica por ID
categoryRoutes.get("/:id", categoryController.findById);

// Atualizar uma categoria (Precisaremos criar o método 'update' no Controller)
categoryRoutes.put("/:id", categoryController.update);

// Excluir uma categoria (Precisaremos criar o método 'delete' no Controller)
categoryRoutes.delete("/:id", categoryController.delete);

export default categoryRoutes;