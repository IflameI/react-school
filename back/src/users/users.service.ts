import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { ChangeRoleDto } from 'src/roles/dto/change-role-dto';
import { RolesService } from 'src/roles/roles.service';
import { ChangeUserGradeDto } from 'src/subjects/dto/change-user-grade-dto';
import { SubjectsService } from 'src/subjects/subjects.service';

import { CreateUserDto } from './dto/create-user.dto';

import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
    private subjectService: SubjectsService,
  ) {}

  async createUser(dto: CreateUserDto) {
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

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async getUserInfoByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return {
      role: user.roles[0].value,
      name: user.name,
      userClass: user.userClass,
    };
  }

  async getStudentsGrade(userClass: string, subject: string) {
    const users = await this.userRepository.findAll({
      where: { userClass },
      include: { all: true },
    });
    const filtredUsers = users.filter(
      (item) => item.roles[0].value !== 'TEACHER',
    );
    return filtredUsers.map((item) => {
      return {
        id: item.id,
        name: item.name,
        grade: item.subjects.filter((items) => items.subjectName === subject),
      };
    });
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

  async changeUserRole(dto: ChangeRoleDto) {
    const user = await this.userRepository.findByPk(dto.id);
    const role = await this.roleService.getRoleByValue(dto.role);
    if (role && user) {
      await user.$set('roles', [role.id]);
      user.roles = [role];
      return dto;
    }
    throw new HttpException(
      'Пользователь или роль не найдены',
      HttpStatus.NOT_FOUND,
    );
  }

  // async changeUserGrade(dto: ChangeUserGradeDto) {
  //   const user = await this.userRepository.findByPk(dto.userId);
  //   const subject = await this.subjectService.getSubjectByName(dto.subjectName);
  //   const grade = await this.subjectService.getGradeById(dto.userId);
  //   const test = grade.filter((item) => item.subjectId === subject.id);
  //   if(test){
  //     await user.$set('subjects',test)
  //   }
  //   return test;
  //   throw new HttpException(
  //     'Пользователь или роль не найдены',
  //     HttpStatus.NOT_FOUND,
  //   );
  // }
}
