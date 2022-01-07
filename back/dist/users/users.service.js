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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const change_role_dto_1 = require("../roles/dto/change-role-dto");
const roles_service_1 = require("../roles/roles.service");
const user_roles_model_1 = require("../roles/user-roles.model");
const change_user_grade_dto_1 = require("../subjects/dto/change-user-grade-dto");
const user_subjects_model_1 = require("../subjects/user-subjects.model");
const users_model_1 = require("./users.model");
let UsersService = class UsersService {
    constructor(userRepository, roleService, userSubjectsRepository, userRolesRepository) {
        this.userRepository = userRepository;
        this.roleService = roleService;
        this.userSubjectsRepository = userSubjectsRepository;
        this.userRolesRepository = userRolesRepository;
    }
    async createUser(dto) {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('STUDENT');
        await user.$set('roles', [role.id]);
        user.roles = [role];
        return user;
    }
    async getAllUsers() {
        const users = await this.userRepository.findAll({ include: { all: true } });
        return users;
    }
    async getUserByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });
        return user;
    }
    async getUserInfoByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            include: { all: true },
        });
        return {
            id: user.id,
            role: user.roles[0].value,
            name: user.name,
            userClass: user.userClass,
        };
    }
    async getStudentsGrade(userClass, subject) {
        const users = await this.userRepository.findAll({
            where: { userClass },
            include: { all: true },
        });
        const filtredUsers = users.filter((item) => item.roles[0].value !== 'TEACHER');
        return filtredUsers.map((item) => {
            const filtredGrade = item.subjects.filter((items) => items.subjectName === subject);
            return {
                id: item.id,
                name: item.name,
                grade: filtredGrade[0],
            };
        });
    }
    async getStudentGrade(userId) {
        const user = await this.userRepository.findOne({
            where: { id: userId },
            include: { all: true },
        });
        return [
            {
                id: user.id,
                name: user.name,
                subjects: user.subjects,
            },
        ];
    }
    async getTeacherAndStudent() {
        const user = await this.userRepository.findAll({
            include: { all: true },
        });
        const filtredUsers = user.filter((item) => item.userClass !== null);
        return filtredUsers.map((item) => {
            return { id: item.id, name: item.name, role: item.roles[0].value };
        });
    }
    async changeUserRole(dto) {
        const user = await this.userRepository.findByPk(dto.id);
        const role = await this.roleService.getRoleByValue(dto.role);
        let userRole = await this.userRolesRepository.findOne({
            where: { userId: user.id },
        });
        if (user && role) {
            userRole.roleId = role.id;
            userRole.save();
            return dto;
        }
        throw new common_1.HttpException('Пользователь или роль не найдены', common_1.HttpStatus.NOT_FOUND);
    }
    async changeUserGrade(dto) {
        const userId = dto.userId;
        const user = await this.userRepository.findByPk(dto.userId, {
            include: { all: true },
        });
        const subject = user.subjects.filter((item) => item.subjectName === dto.subjectName);
        let userGrade = await this.userSubjectsRepository.findOne({
            where: { userId, subjectId: subject[0].id },
        });
        if (user && userGrade) {
            userGrade[dto.period] = dto.grade;
            userGrade.save();
            return subject.map((item) => {
                item.UserSubjects[dto.period] = dto.grade;
                return { id: item.UserSubjects.userId, grade: item };
            });
        }
        throw new common_1.HttpException('Пользователь или оценка не найдены', common_1.HttpStatus.NOT_FOUND);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __param(2, (0, sequelize_1.InjectModel)(user_subjects_model_1.UserSubjects)),
    __param(3, (0, sequelize_1.InjectModel)(user_roles_model_1.UserRoles)),
    __metadata("design:paramtypes", [Object, roles_service_1.RolesService, Object, Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map