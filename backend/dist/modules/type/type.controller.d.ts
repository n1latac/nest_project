import { CreateTypeDTO } from './type.dto';
import { TypeService } from './type.service';
import { SuccessResponseDTO } from '../../response';
export declare class TypeController {
    private readonly typeService;
    constructor(typeService: TypeService);
    createType(data: CreateTypeDTO): Promise<SuccessResponseDTO>;
    getAllTypes(): Promise<SuccessResponseDTO>;
}
