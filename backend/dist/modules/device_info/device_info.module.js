"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceInfoModule = void 0;
const common_1 = require("@nestjs/common");
const device_info_controller_1 = require("./device_info.controller");
const device_info_service_1 = require("./device_info.service");
let DeviceInfoModule = class DeviceInfoModule {
};
exports.DeviceInfoModule = DeviceInfoModule;
exports.DeviceInfoModule = DeviceInfoModule = __decorate([
    (0, common_1.Module)({
        controllers: [device_info_controller_1.DeviceInfoController],
        providers: [device_info_service_1.DeviceInfoService],
    })
], DeviceInfoModule);
//# sourceMappingURL=device_info.module.js.map