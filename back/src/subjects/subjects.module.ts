import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';
import { SubjectsController } from './subjects.controller';
import { Subject } from './subjects.model';
import { SubjectsService } from './subjects.service';
import { UserSubjects } from './user-subjects.model';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService],
  imports: [
    SequelizeModule.forFeature([Subject, UserSubjects, User]),
    forwardRef(() => UsersModule),
  ],
  exports: [SubjectsService],
})
export class SubjectsModule {}
