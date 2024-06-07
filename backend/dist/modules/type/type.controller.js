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
exports.TypeController = void 0;
const common_1 = require("@nestjs/common");
const type_dto_1 = require("./type.dto");
const type_service_1 = require("./type.service");
const jwt_guard_1 = require("../../guards/jwt-guard");
const roles_guard_1 = require("../../guards/roles.guard");
const roles_decorator_1 = require("../../decorators/roles.decorator");
const enums_1 = require("../../constants/enums");
let TypeController = class TypeController {
    constructor(typeService) {
        this.typeService = typeService;
    }
    createType(data) {
        return this.typeService.createType(data);
    }
    getAllTypes() {
        return this.typeService.getAll();
    }
};
exports.TypeController = TypeController;
__decorate([
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)(enums_1.Role.ADMIN),
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [type_dto_1.CreateTypeDTO]),
    __metadata("design:returntype", void 0)
], TypeController.prototype, "createType", null);
__decorate([
    (0, common_1.Get)('all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeController.prototype, "getAllTypes", null);
exports.TypeController = TypeController = __decorate([
    (0, common_1.Controller)('type'),
    __metadata("design:paramtypes", [type_service_1.TypeService])
], TypeController);
//# sourceMappingURL=type.controller.js.map