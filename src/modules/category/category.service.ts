import Category from "./category.model.js";
import type {
    ICreateCategoryDTO,
    IUpdateCategoryDTO
} from "./category.types.js";

class CategoryService {
    
    // Criar categoria
    public async create(data: ICreateCategoryDTO) {
        const category = await Category.create({
            name: data.name,
            description: data.description ?? "",
            active: data.active ?? true,
        });
        return category;
    }

    // Listar categorias
    public async findAll() {
        return await Category.find();
    }

    // Buscar por ID
    public async findById(id: string) {
        return await Category.findById(id);
    }

    // Atualizar categoria
    public async update(id: string, data: IUpdateCategoryDTO) {
        // { new: true } retorna o objeto já atualizado
        return await Category.findByIdAndUpdate(id, data, { new: true });
    }

    // Excluir categoria
    public async delete(id: string) {
        return await Category.findByIdAndDelete(id);
    }
}

export default new CategoryService();