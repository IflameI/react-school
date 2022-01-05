import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  @Get('')
  getAllSubjects() {
    return this.subjectsService.getAllSubjects();
  }

  @Get('defaultGrade/:email')
  createDefaultGrade(@Param() params) {
    return this.subjectsService.createDefaultGrade(params.email);
  }
}
