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
exports.SuccessResponseDTO = exports.AuthResponse = void 0;
const class_validator_1 = require("class-validator");
const class_validator_2 = require("class-validator");
class AuthResponse {
}
exports.AuthResponse = AuthResponse;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthResponse.prototype, "first_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthResponse.prototype, "last_name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthResponse.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthResponse.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthResponse.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], AuthResponse.prototype, "token", void 0);
class SuccessResponseDTO {
    constructor(data = null) {
        this.error = null;
        this.success = true;
        this.statusCode = null;
        if (data?.status && data?.status > 300) {
            this.error = { message: data?.message, code: data?.status };
            delete this.data;
            delete this.success;
            this.statusCode = data?.status;
            return;
        }
        delete this.statusCode;
        Object.assign(this, { data });
    }
}
exports.SuccessResponseDTO = SuccessResponseDTO;
__decorate([
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Object)
], SuccessResponseDTO.prototype, "data", void 0);
__decorate([
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Object)
], SuccessResponseDTO.prototype, "error", void 0);
__decorate([
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Object)
], SuccessResponseDTO.prototype, "success", void 0);
__decorate([
    (0, class_validator_2.IsOptional)(),
    __metadata("design:type", Object)
], SuccessResponseDTO.prototype, "statusCode", void 0);
//# sourceMappingURL=index.js.map