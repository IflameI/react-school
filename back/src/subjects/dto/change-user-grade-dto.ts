import { IsNumber, IsString } from 'class-validator';

export class ChangeUserGradeDto {
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly grade: number;
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly userId: number;
  @IsString({ message: 'Должно быть строкой' })
  readonly subjectName: string;
  @IsString({ message: 'Должно быть строкой' })
  readonly period: string;
}
