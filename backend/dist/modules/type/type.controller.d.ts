import { CreateTypeDTO } from './type.dto';
import { TypeService } from './type.service';
export declare class TypeController {
    private readonly typeService;
    constructor(typeService: TypeService);
    createType(data: CreateTypeDTO): Promise<import("../../models/type.model").Type>;
    getAllTypes(): Promise<import("../../models/type.model").Type[]>;
}
