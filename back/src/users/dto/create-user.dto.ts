import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Никита', description: 'Имя' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  readonly name: string;
  @ApiProperty({ example: '5A', description: 'Класс пользователя' })
  @IsString({ message: 'Должно быть строкой' })
  @IsOptional()
  readonly userClass: string;
  @ApiProperty({ example: 'user@mail.ru', description: 'Почта' })
  @IsString({ message: 'Должно быть строкой' })
  @IsEmail({}, { message: 'Некорректный email' })
  readonly email: string;
  @ApiProperty({ example: '12345678', description: 'Пароль' })
  @IsString({ message: 'Должно быть строкой' })
  @Length(4, 16, { message: 'Не меньше 4 и не больше 16' })
  readonly password: string;
}
