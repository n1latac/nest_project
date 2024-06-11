"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceModule = void 0;
const common_1 = require("@nestjs/common");
const device_controller_1 = require("./device.controller");
const device_service_1 = require("./device.service");
const sequelize_1 = require("@nestjs/sequelize");
const device_model_1 = require("../../models/device.model");
const deviceInfo_model_1 = require("../../models/deviceInfo.model");
const users_service_1 = require("../users/users.service");
const user_model_1 = require("../../models/user.model");
let DeviceModule = class DeviceModule {
};
exports.DeviceModule = DeviceModule;
exports.DeviceModule = DeviceModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([device_model_1.Device, deviceInfo_model_1.DeviceInfo, user_model_1.User])],
        controllers: [device_controller_1.DeviceController],
        providers: [device_service_1.DeviceService, users_service_1.UsersService],
    })
], DeviceModule);
//# sourceMappingURL=device.module.js.map