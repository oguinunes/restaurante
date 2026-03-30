/*
    - Lidar com HTTP
    - Receber Request
    - Devolver Response
*/

import type{Request, Response} from "express";
import categoryService from "./category.service.js";

class CategoryController{
    public async create(request:Request, response:Response):Promise<Response>{
        const{name, description, active} = request.body; 

        const category = await categoryService.create({
            name,
            description,
            active
        });

        return response.status(201).json(category);
    
}
        public async findAll(request:Request, response:Response):Promise<Response>{
        const category = await categoryService.findAll();
        return response.status(201).json(category);
    
}

}

export default new CategoryController();