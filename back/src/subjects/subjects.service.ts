import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';
import { Subject } from './subjects.model';
import { UserSubjects } from './user-subjects.model';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject) private subjectsRepository: typeof Subject,
    private userService: UsersService,
    @InjectModel(UserSubjects)
    private userSubjectsRepository: typeof UserSubjects,
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  async getAllSubjects() {
    const subjects = await this.subjectsRepository.findAll();
    return subjects;
  }
  async getSubjectByName(subjectName: string) {
    const role = await this.subjectsRepository.findOne({
      where: { subjectName },
      include: { all: true },
    });
    return role;
  }

  async getGradeById(userId: number) {
    const subject = await this.userSubjectsRepository.findAll({
      where: { userId },
    });
    return subject;
  }

  async createDefaultGrade(email: string) {
    const subjects = await this.subjectsRepository.findAll();
    const user = await this.userService.getUserByEmail(email);
    const userId = user.id;

    if (user.subjects.length === 0) {
      subjects.forEach(
        async (item) =>
          await this.userSubjectsRepository.findOrCreate({
            where: { userId: userId, subjectId: item.id },
          }),
      );
    }
  }
}
