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
exports.Type = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const device_model_1 = require("./device.model");
const typeBrand_model_1 = require("./typeBrand.model");
let Type = class Type extends sequelize_typescript_1.Model {
};
exports.Type = Type;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: true,
        unique: true,
    }),
    __metadata("design:type", String)
], Type.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => device_model_1.Device, 'type_id'),
    __metadata("design:type", Array)
], Type.prototype, "devices", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => typeBrand_model_1.TypeBrand, 'type_id'),
    __metadata("design:type", Array)
], Type.prototype, "types", void 0);
exports.Type = Type = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'types',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        timestamps: true,
    })
], Type);
//# sourceMappingURL=type.model.js.map