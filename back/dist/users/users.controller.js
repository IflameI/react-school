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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const roles_auth_decorator_1 = require("../auth/roles-auth-decorator");
const roles_guard_1 = require("../auth/roles.guard");
const change_role_dto_1 = require("../roles/dto/change-role-dto");
const change_user_grade_dto_1 = require("../subjects/dto/change-user-grade-dto");
const create_user_dto_1 = require("./dto/create-user.dto");
const users_model_1 = require("./users.model");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    create(userDto) {
        return this.usersService.createUser(userDto);
    }
    getUserInfoByEmail(params) {
        return this.usersService.getUserInfoByEmail(params.email);
    }
    getTeacherAndStudent() {
        return this.usersService.getTeacherAndStudent();
    }
    getStudentsGrade(params) {
        return this.usersService.getStudentsGrade(params.class, params.subject);
    }
    getStudentGrade(params) {
        return this.usersService.getStudentGrade(params.userId);
    }
    changeUserRole(changeRoleDto) {
        return this.usersService.changeUserRole(changeRoleDto);
    }
    changeUserGrade(ChangeUserGradeDto) {
        return this.usersService.changeUserGrade(ChangeUserGradeDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '???????????????? ????????????????????????' }),
    (0, swagger_1.ApiResponse)({ status: 201, type: users_model_1.User }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '???????????????? ???????????????????? ?? ???????????????????????? ???? email' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        schema: {
            properties: {
                id: {
                    type: 'number',
                },
                role: {
                    type: 'string',
                },
                name: {
                    type: 'string',
                },
                userClass: {
                    type: 'string',
                },
            },
        },
    }),
    (0, common_1.Get)('about/:email'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getUserInfoByEmail", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '???????????????? ???????????????????? ?? ???????? ?????????????????????????? ???????? ?????????????? ???? admin',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        schema: {
            properties: {
                id: {
                    type: 'number',
                },
                name: {
                    type: 'string',
                },
                role: {
                    type: 'string',
                },
            },
        },
    }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Get)('adminCabinet'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getTeacherAndStudent", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '?????????????????? ???????????? ??  ????????????????',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        schema: {
            properties: {
                id: {
                    type: 'number',
                },
                name: {
                    type: 'string',
                },
                grade: {
                    type: 'object',
                },
            },
        },
    }),
    (0, common_1.Get)('teacherCabinet/:class/:subject'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getStudentsGrade", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '?????????????????? ???????? ???????????? ?? ?????????????? ???? id',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        schema: {
            properties: {
                id: {
                    type: 'number',
                },
                name: {
                    type: 'string',
                },
                grade: {
                    type: 'object',
                },
            },
        },
    }),
    (0, common_1.Get)('studentCabinet/:userId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getStudentGrade", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '?????????? ???????? ?? ????????????????????????',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        schema: {
            properties: {
                role: {
                    type: 'string',
                },
                id: {
                    type: 'number',
                },
            },
        },
    }),
    (0, roles_auth_decorator_1.Roles)('ADMIN'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, common_1.Patch)('role'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_role_dto_1.ChangeRoleDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changeUserRole", null);
__decorate([
    (0, swagger_1.ApiOperation)({
        summary: '?????????? ???????????? ?? ????????????????????????',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        schema: {
            properties: {
                id: {
                    type: 'number',
                },
                grade: {
                    type: 'object',
                },
            },
        },
    }),
    (0, common_1.Patch)('grade'),
    (0, roles_auth_decorator_1.Roles)('TEACHER'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_user_grade_dto_1.ChangeUserGradeDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "changeUserGrade", null);
UsersController = __decorate([
    (0, swagger_1.ApiTags)('????????????????????????'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map