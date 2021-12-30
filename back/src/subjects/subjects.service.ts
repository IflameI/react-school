import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subject } from './subjects.model';
import { UserSubjects } from './user-subjects.model';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject) private subjectsRepository: typeof Subject,
    @InjectModel(UserSubjects)
    private userSubjectsRepository: typeof UserSubjects,
  ) {}

  async getAllSubjects() {
    const subjects = await this.subjectsRepository.findAll();
    return subjects;
  }
  async getSubjectByName(subjectName: string) {
    const role = await this.subjectsRepository.findOne({
      where: { subjectName },
    });
    return role;
  }

  async getGradeById(userId: number) {
    const subject = await this.userSubjectsRepository.findAll({
      where: { userId },
    });
    return subject;
  }
}
