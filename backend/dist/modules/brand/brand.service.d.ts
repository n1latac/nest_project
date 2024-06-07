import { CreateTypeDTO } from '../type/type.dto';
import { Brand } from '../../models/brand.model';
export declare class BrandService {
    private readonly brandRepository;
    constructor(brandRepository: typeof Brand);
    createBrand(data: CreateTypeDTO): Promise<Brand>;
    getAll(): Promise<Brand[]>;
}
