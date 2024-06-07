import { CreateTypeDTO } from '../type/type.dto';
import { BrandService } from './brand.service';
export declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandService);
    createType(data: CreateTypeDTO): Promise<import("../../models/brand.model").Brand>;
    getAllTypes(): Promise<import("../../models/brand.model").Brand[]>;
}
