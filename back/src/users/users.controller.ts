import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddRoleDto } from 'src/roles/dto/add-role-dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Получить информацию о пользователе по email' })
  @ApiResponse({
    status: 200,
  })
  @Get('about/:email')
  getUserInfoByEmail(@Param() params) {
    return this.usersService.getUserInfoByEmail(params.email);
  }

  @ApiOperation({
    summary: 'Получить информацию о всех пользователях роль которых не admin',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('about')
  getTeacherAndStudent() {
    return this.usersService.getTeacherAndStudent();
  }

  @ApiOperation({
    summary: 'Выдача роли, пользователю',
  })
  @ApiResponse({
    status: 200,
  })
  @Get('role')
  addRole(@Body() addRoleDto: AddRoleDto) {
    return this.usersService.addRole(addRoleDto);
  }
}
