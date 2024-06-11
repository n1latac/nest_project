"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceService = void 0;
const common_1 = require("@nestjs/common");
const errors_1 = require("../../common/errors");
const device_model_1 = require("../../models/device.model");
const sequelize_1 = require("@nestjs/sequelize");
const deviceInfo_model_1 = require("../../models/deviceInfo.model");
let DeviceService = class DeviceService {
    async createDevice(data, file) {
        const { name, price: priceString, brand_id, type_id, info } = data;
        console.log(file);
        const price = Number(priceString);
        try {
            const device = await device_model_1.Device.create({
                name,
                price,
                brand_id,
                type_id,
                img: file.filename,
            });
            if (info) {
                const ArrayInfo = JSON.parse(info);
                console.log(ArrayInfo, '----------------------');
                for (const item of ArrayInfo) {
                    await deviceInfo_model_1.DeviceInfo.create({
                        title: item.title,
                        description: item.description,
                        id: device.id,
                    });
                }
            }
            return device;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAll(data) {
        const { brand_id: brand_id_string, type_id: type_id_string, limit = 10, page = 1, } = data;
        const brand_id = Number(brand_id_string);
        const type_id = Number(type_id_string);
        const offset = (page - 1) * limit;
        console.log(brand_id);
        let devices;
        if (!brand_id && !type_id) {
            devices = await this.deviceRepository.findAndCountAll({ limit, offset });
        }
        if (brand_id && !type_id) {
            console.log('here');
            console.log(limit);
            console.log(offset);
            devices = await this.deviceRepository.findAndCountAll({
                where: { brand_id },
                limit,
                offset,
            });
        }
        if (!brand_id && type_id) {
            devices = await this.deviceRepository.findAndCountAll({
                where: { type_id },
                limit,
                offset,
            });
        }
        if (brand_id && type_id) {
            devices = await this.deviceRepository.findAndCountAll({
                where: { type_id, brand_id },
                limit,
                offset,
            });
        }
        return { result: devices.rows, count: devices.count };
    }
    async getOneDeviceById(id) {
        if (id === undefined) {
            throw new common_1.BadRequestException(errors_1.AppError.BAD_REQUEST_DATA);
        }
        const device = await device_model_1.Device.findOne({
            where: { id },
            include: [{ association: 'device_info' }],
        });
        return device;
    }
};
exports.DeviceService = DeviceService;
__decorate([
    (0, sequelize_1.InjectModel)(device_model_1.Device),
    __metadata("design:type", Object)
], DeviceService.prototype, "deviceRepository", void 0);
exports.DeviceService = DeviceService = __decorate([
    (0, common_1.Injectable)()
], DeviceService);
//# sourceMappingURL=device.service.js.map