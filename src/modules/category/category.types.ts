export interface ICategory{
    name: string;
    description?:string;
    active:boolean;
    createdAc?:string;
    updateAC?:string;
}

export interface ICreateCategoryDTO{//"Data Transfer Object" -> "criar" um dado e passar a "estrutura" para outra camada
    name: string;
    description?:string;
    active?:boolean; // "?" -> nao obrigatorio
}

export interface IUpdateCategoryDTO{
    name?: string;
    description?:string;
    active:boolean;
}
