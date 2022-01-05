"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectsModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const users_module_1 = require("../users/users.module");
const subjects_controller_1 = require("./subjects.controller");
const subjects_model_1 = require("./subjects.model");
const subjects_service_1 = require("./subjects.service");
const user_subjects_model_1 = require("./user-subjects.model");
let SubjectsModule = class SubjectsModule {
};
SubjectsModule = __decorate([
    (0, common_1.Module)({
        controllers: [subjects_controller_1.SubjectsController],
        providers: [subjects_service_1.SubjectsService],
        imports: [
            sequelize_1.SequelizeModule.forFeature([subjects_model_1.Subject, user_subjects_model_1.UserSubjects, users_model_1.User]),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
        ],
        exports: [subjects_service_1.SubjectsService],
    })
], SubjectsModule);
exports.SubjectsModule = SubjectsModule;
//# sourceMappingURL=subjects.module.js.map