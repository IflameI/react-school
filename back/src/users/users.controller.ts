import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Roles } from 'src/auth/roles-auth-decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ChangeRoleDto } from 'src/roles/dto/change-role-dto';
import { ChangeUserGradeDto } from 'src/subjects/dto/change-user-grade-dto';

import { CreateUserDto } from './dto/create-user.dto';

import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ status: 200, type: User })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
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
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('about')
  getTeacherAndStudent() {
    return this.usersService.getTeacherAndStudent();
  }

  @Get('usersClass/:class/:subject')
  getStudentsGrade(@Param() params) {
    return this.usersService.getStudentsGrade(params.class, params.subject);
  }

  @ApiOperation({
    summary: 'Выдача роли, пользователю',
  })
  @ApiResponse({
    status: 200,
  })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post('role')
  changeUserRole(@Body() changeRoleDto: ChangeRoleDto) {
    return this.usersService.changeUserRole(changeRoleDto);
  }

  @Post('grade')
  @Roles('TEACHER')
  @UseGuards(RolesGuard)
  changeUserGrade(@Body() ChangeUserGradeDto: ChangeUserGradeDto) {
    return this.usersService.changeUserGrade(ChangeUserGradeDto);
  }
}
