import type { Request, Response } from "express";
import categoryService from "./category.service.js";

class CategoryController {
    // 201 Created para criações
    public async create(request: Request, response: Response): Promise<Response> {
        const { name, description, active } = request.body;

        const category = await categoryService.create({
            name,
            description,
            active
        });

        return response.status(201).json(category);
    }

    // 200 OK para listagens
    public async findAll(request: Request, response: Response): Promise<Response> {
        const categories = await categoryService.findAll();
        return response.status(200).json(categories);
    }

    public async findById(request: Request, response: Response): Promise<Response> {
    // Forçamos o TypeScript a entender que 'id' é uma string
    const { id } = request.params as { id: string };

    if (!id) {
        return response.status(400).json({ message: "ID não fornecido" });
    }

    try {
        const category = await categoryService.findById(id);

        if (!category) {
            return response.status(404).json({ message: "Categoria não encontrada" });
        }

        return response.status(200).json(category);
    } catch (error) {
        return response.status(400).json({ message: "Formato de ID inválido" });
    }
}


    public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params as { id: string };
    const { name, description, active } = request.body;

    try {
        const category = await categoryService.update(id, { name, description, active });

        if (!category) {
            return response.status(404).json({ message: "Categoria não encontrada" });
        }

        return response.status(200).json(category);
    } catch (error) {
        return response.status(400).json({ message: "Erro ao atualizar categoria" });
    }
}

    public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params as { id: string };

    try {
        const category = await categoryService.delete(id);

        if (!category) {
            return response.status(404).json({ message: "Categoria não encontrada" });
        }

        // 204 No Content é comum em deletes, mas você pode usar 200 com uma mensagem
        return response.status(200).json({ message: "Categoria removida com sucesso" });
    } catch (error) {
        return response.status(400).json({ message: "Erro ao excluir categoria" });
    }
}
}

export default new CategoryController();