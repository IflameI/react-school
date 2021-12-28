import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subject } from './subjects.model';

@Injectable()
export class SubjectsService {
  constructor(
    @InjectModel(Subject) private subjectsRepository: typeof Subject,
  ) {}

  async getAllSubjects() {
    const subjects = await this.subjectsRepository.findAll();
    return subjects;
  }
}
