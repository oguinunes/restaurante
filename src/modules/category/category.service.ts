/*
    Papel do category.service.ts

    Será responsável por:
        - Criar categoria
        - Listar categoria
        - Buscar categoria por id
        - Atualizar cat
        - Excluir cat
    Ou seja, concentra as operações e regras de negócio relacionado ao modulo categoria

    ---------------------------
    O Service:
        - Não recebe req e res
        - Não define rota
        - Não sabe nada de HTTP
        - Cuida da lógica da funcionalidade
*/

import Category from "./category.model.js";
import type {
    ICreateCategoryDTO,
    IUpdateCategoryDTO
} from "./category.types.js";

class CategoryService{
    public async create(data:ICreateCategoryDTO){
        const category = await Category.create({
            name:data.name,
            description:data.description ?? "",
            active:data.active ?? true,
        });
        return category;
    }

    public async findAll(){
        return await Category.find();
    }
}


export default new CategoryService;