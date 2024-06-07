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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceController = void 0;
const common_1 = require("@nestjs/common");
const device_service_1 = require("./device.service");
const device_dto_1 = require("./device.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
let DeviceController = class DeviceController {
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    createType(data, file) {
        console.log(file);
        return this.deviceService.createDevice(data, file);
    }
    getAllTypes(data) {
        return this.deviceService.getAll(data);
    }
    getOneDevice(id) {
        return this.deviceService.getOneDeviceById(id);
    }
};
exports.DeviceController = DeviceController;
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                const name = file.originalname.split('.')[0];
                const fileExtension = file.originalname.split('.')[1];
                const newFileName = name.split('').join('_') + '_' + Date.now() + '.' + fileExtension;
                cb(null, newFileName);
            },
        }),
        fileFilter: (req, file, cb) => {
            if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
                return cb(null, false);
            }
            cb(null, true);
        },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [device_dto_1.CreateDeviceDto, Object]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "createType", null);
__decorate([
    (0, common_1.Post)('all'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [device_dto_1.GetAllDevicesDTO]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getAllTypes", null);
__decorate([
    (0, common_1.Get)('one'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeviceController.prototype, "getOneDevice", null);
exports.DeviceController = DeviceController = __decorate([
    (0, common_1.Controller)('device'),
    __metadata("design:paramtypes", [device_service_1.DeviceService])
], DeviceController);
//# sourceMappingURL=device.controller.js.map