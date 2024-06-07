import { CreateTypeDTO } from './type.dto';
import { Type } from '../../models/type.model';
export declare class TypeService {
    private readonly typeRepository;
    constructor(typeRepository: typeof Type);
    createType(data: CreateTypeDTO): Promise<Type>;
    getAll(): Promise<Type[]>;
}
