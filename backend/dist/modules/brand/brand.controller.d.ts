import { CreateTypeDTO } from '../type/type.dto';
import { BrandService } from './brand.service';
import { SuccessResponseDTO } from '../../response';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    createType(data: CreateTypeDTO): Promise<SuccessResponseDTO>;
    getAllTypes(): Promise<SuccessResponseDTO>;
}
