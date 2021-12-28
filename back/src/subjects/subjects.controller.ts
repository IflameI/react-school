import { Controller, Get } from '@nestjs/common';
import { SubjectsService } from './subjects.service';

@Controller('subjects')
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  @Get('')
  getAllSubjects() {
    return this.subjectsService.getAllSubjects();
  }
}
