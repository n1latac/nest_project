/// <reference types="multer" />
import { DeviceService } from './device.service';
import { CreateDeviceDto } from './device.dto';
import { SuccessResponseDTO } from '../../response';
export declare class DeviceController {
    private readonly deviceService;
    constructor(deviceService: DeviceService);
    createSneaker(data: CreateDeviceDto, file: Express.Multer.File): Promise<SuccessResponseDTO>;
    getAllDevices(page?: number, limit?: number, brand_id?: number, type_id?: number): Promise<SuccessResponseDTO>;
    getOneDevice(id: number): Promise<SuccessResponseDTO>;
}
