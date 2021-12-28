import {
  Table,
  Model,
  Column,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Subject } from './subjects.model';

@Table({ tableName: 'users_subjects', createdAt: false, updatedAt: false })
export class UserSubjects extends Model<UserSubjects> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER })
  gradeFirstPer: number;

  @Column({ type: DataType.INTEGER })
  gradeSecondPer: number;

  @Column({ type: DataType.INTEGER })
  gradeThirdPer: number;

  @Column({ type: DataType.INTEGER })
  gradeFourPer: number;

  @ForeignKey(() => Subject)
  @Column({ type: DataType.INTEGER })
  subjectId: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;
}
