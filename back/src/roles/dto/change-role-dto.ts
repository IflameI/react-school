import { IsNumber, IsString } from 'class-validator';

export class ChangeRoleDto {
  @IsString({ message: 'Должно быть строкой' })
  readonly role: string;
  @IsNumber({}, { message: 'Должно быть числом' })
  readonly id: number;
}
