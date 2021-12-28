import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Model,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { UserSubjects } from './user-subjects.model';

@Table({ tableName: 'subjects' })
export class Subject extends Model<Subject> {
  @ApiProperty({ example: '1', description: 'Уникальный индентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Алгебра', description: 'Название предмета' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  subjectName: string;

  @BelongsToMany(() => User, () => UserSubjects)
  users: User[];
}
