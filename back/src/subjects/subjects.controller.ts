import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Subject } from './subjects.model';
import { SubjectsService } from './subjects.service';

@ApiTags('Предметы')
@Controller('subjects')
export class SubjectsController {
  constructor(private subjectsService: SubjectsService) {}

  @ApiOperation({ summary: 'Получить все существующие предметы' })
  @ApiResponse({ status: 200, type: Subject })
  @Get('')
  getAllSubjects() {
    return this.subjectsService.getAllSubjects();
  }
}
