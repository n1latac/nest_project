export declare class CreateDeviceDto {
    name: string;
    price: number;
    img: string;
    type_id: number;
    brand_id: number;
    info: string;
}
export declare class GetAllDevicesDTO {
    type_id: number;
    brand_id: number;
    limit: number;
    page: number;
}
