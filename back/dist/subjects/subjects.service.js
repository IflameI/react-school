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
exports.SubjectsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const subjects_model_1 = require("./subjects.model");
const user_subjects_model_1 = require("./user-subjects.model");
let SubjectsService = class SubjectsService {
    constructor(subjectsRepository, userSubjectsRepository) {
        this.subjectsRepository = subjectsRepository;
        this.userSubjectsRepository = userSubjectsRepository;
    }
    async getAllSubjects() {
        const subjects = await this.subjectsRepository.findAll();
        return subjects;
    }
    async getSubjectByName(subjectName) {
        const role = await this.subjectsRepository.findOne({
            where: { subjectName },
            include: { all: true },
        });
        return role;
    }
    async getGradeById(userId) {
        const subject = await this.userSubjectsRepository.findAll({
            where: { userId },
        });
        return subject;
    }
};
SubjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(subjects_model_1.Subject)),
    __param(1, (0, sequelize_1.InjectModel)(user_subjects_model_1.UserSubjects)),
    __metadata("design:paramtypes", [Object, Object])
], SubjectsService);
exports.SubjectsService = SubjectsService;
//# sourceMappingURL=subjects.service.js.map