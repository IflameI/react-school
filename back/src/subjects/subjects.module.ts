import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SubjectsController } from './subjects.controller';
import { Subject } from './subjects.model';
import { SubjectsService } from './subjects.service';
import { UserSubjects } from './user-subjects.model';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService],
  imports: [SequelizeModule.forFeature([Subject, UserSubjects])],
  exports: [SubjectsService],
})
export class SubjectsModule {}
