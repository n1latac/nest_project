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
exports.Device = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const basketDevice_model_1 = require("./basketDevice.model");
const rating_model_1 = require("./rating.model");
const type_model_1 = require("./type.model");
const brand_model_1 = require("./brand.model");
const deviceInfo_model_1 = require("./deviceInfo.model");
let Device = class Device extends sequelize_typescript_1.Model {
};
exports.Device = Device;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Device.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Device.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Device.prototype, "rating", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
    }),
    __metadata("design:type", String)
], Device.prototype, "img", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Device.prototype, "type_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Device.prototype, "brand_id", void 0);
__decorate([
    (0, sequelize_typescript_1.HasOne)(() => basketDevice_model_1.BasketDevice, 'device_id'),
    __metadata("design:type", basketDevice_model_1.BasketDevice)
], Device.prototype, "basketDevice", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => rating_model_1.Rating, 'device_id'),
    __metadata("design:type", Array)
], Device.prototype, "device_rating", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => type_model_1.Type, 'type_id'),
    __metadata("design:type", type_model_1.Type)
], Device.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => brand_model_1.Brand, 'brand_id'),
    __metadata("design:type", brand_model_1.Brand)
], Device.prototype, "brand", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => deviceInfo_model_1.DeviceInfo, 'device_id'),
    __metadata("design:type", Array)
], Device.prototype, "device_info", void 0);
exports.Device = Device = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'devices', underscored: true })
], Device);
//# sourceMappingURL=device.model.js.map