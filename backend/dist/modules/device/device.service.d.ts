import { CreateDeviceDto, GetAllDevicesDTO } from './device.dto';
import { Device } from '../../models/device.model';
export declare class DeviceService {
    private readonly deviceRepository;
    createDevice(data: CreateDeviceDto, file: any): Promise<Device>;
    getAll(data: GetAllDevicesDTO): Promise<{
        result: any;
        count: any;
    }>;
    getOneDeviceById(id: number): Promise<Device>;
}
