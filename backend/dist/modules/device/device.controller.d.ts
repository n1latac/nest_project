/// <reference types="multer" />
import { DeviceService } from './device.service';
import { CreateDeviceDto, GetAllDevicesDTO } from './device.dto';
export declare class DeviceController {
    private readonly deviceService;
    constructor(deviceService: DeviceService);
    createType(data: CreateDeviceDto, file: Express.Multer.File): Promise<import("../../models/device.model").Device>;
    getAllTypes(data: GetAllDevicesDTO): Promise<{
        result: any;
        count: any;
    }>;
    getOneDevice(id: number): Promise<import("../../models/device.model").Device>;
}
