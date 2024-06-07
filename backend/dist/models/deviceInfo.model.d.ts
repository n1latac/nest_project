import { Model } from 'sequelize-typescript';
import { Device } from './device.model';
export declare class DeviceInfo extends Model {
    title: string;
    description: string;
    device_id: number;
    device: Device;
}
