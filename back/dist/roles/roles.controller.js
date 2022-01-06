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
exports.RolesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_auth_decorator_1 = require("../auth/roles-auth-decorator");
const roles_guard_1 = require("../auth/roles.guard");
const create_role_dto_1 = require("./dto/create-role-dto");
const roles_model_1 = require("./roles.model");
const roles_service_1 = require("./roles.service");
let RolesController = class RolesController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    create(dto) {
        return this.roleService.createRole(dto);
    }
    getAllRoles() {
        return this.roleService.getAllRoles();
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создать роль' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: create_role_dto_1.CreateRoleDto }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Получить все существующие роли' }),
    (0, swagger_1.ApiResponse)({ status: 200, type: roles_model_1.Role }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RolesController.prototype, "getAllRoles", null);
RolesController = __decorate([
    (0, swagger_1.ApiTags)('Роли пользователей'),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [roles_service_1.RolesService])
], RolesController);
exports.RolesController = RolesController;
//# sourceMappingURL=roles.controller.js.map