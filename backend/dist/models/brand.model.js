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
exports.Brand = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const device_model_1 = require("./device.model");
const typeBrand_model_1 = require("./typeBrand.model");
let Brand = class Brand extends sequelize_typescript_1.Model {
};
exports.Brand = Brand;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Brand.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => device_model_1.Device, 'brand_id'),
    __metadata("design:type", Array)
], Brand.prototype, "devices", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => typeBrand_model_1.TypeBrand, 'brand_id'),
    __metadata("design:type", Array)
], Brand.prototype, "brands", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Brand.prototype, "created_at", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: false,
    }),
    __metadata("design:type", Date)
], Brand.prototype, "updated_at", void 0);
exports.Brand = Brand = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'brands',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        timestamps: true,
    })
], Brand);
//# sourceMappingURL=brand.model.js.map