import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { ChangeRoleDto } from 'src/roles/dto/change-role-dto';
import { RolesService } from 'src/roles/roles.service';
import { UserRoles } from 'src/roles/user-roles.model';
import { ChangeUserGradeDto } from 'src/subjects/dto/change-user-grade-dto';
import { UserSubjects } from 'src/subjects/user-subjects.model';

import { CreateUserDto } from './dto/create-user.dto';

import { User } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService,
    @InjectModel(UserSubjects)
    private userSubjectsRepository: typeof UserSubjects,
    @InjectModel(UserRoles)
    private userRolesRepository: typeof UserRoles,
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
      id: user.id,
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
      const filtredGrade = item.subjects.filter(
        (items) => items.subjectName === subject,
      );
      return {
        id: item.id,
        name: item.name,
        grade: filtredGrade[0],
      };
    });
  }

  async getStudentGrade(userId: number) {
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

  async changeUserRole(dto: ChangeRoleDto) {
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
    throw new HttpException(
      '???????????????????????? ?????? ???????? ???? ??????????????',
      HttpStatus.NOT_FOUND,
    );
  }

  async changeUserGrade(dto: ChangeUserGradeDto) {
    const userId = dto.userId;
    const user = await this.userRepository.findByPk(dto.userId, {
      include: { all: true },
    });
    const subject = user.subjects.filter(
      (item) => item.subjectName === dto.subjectName,
    );
    let userGrade = await this.userSubjectsRepository.findOne({
      where: { userId, subjectId: subject[0].id },
    });

    if (user && userGrade) {
      userGrade[dto.period] = dto.grade;
      userGrade.save();
      return subject.map((item: any) => {
        item.UserSubjects[dto.period] = dto.grade;
        return { id: item.UserSubjects.userId, grade: item };
      });
    }
    throw new HttpException(
      '???????????????????????? ?????? ???????????? ???? ??????????????',
      HttpStatus.NOT_FOUND,
    );
  }
}
