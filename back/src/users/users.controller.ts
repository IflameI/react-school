import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
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
  @ApiResponse({ status: 201, type: User })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Получить информацию о пользователе по email' })
  @ApiResponse({
    status: 200,
    schema: {
      properties: {
        id: {
          type: 'number',
        },
        role: {
          type: 'string',
        },
        name: {
          type: 'string',
        },
        userClass: {
          type: 'string',
        },
      },
    },
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
    schema: {
      properties: {
        id: {
          type: 'number',
        },
        name: {
          type: 'string',
        },
        role: {
          type: 'string',
        },
      },
    },
  })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Get('adminCabinet')
  getTeacherAndStudent() {
    return this.usersService.getTeacherAndStudent();
  }

  @ApiOperation({
    summary: 'Получение оценок у  учеников',
  })
  @ApiResponse({
    status: 200,
    schema: {
      properties: {
        id: {
          type: 'number',
        },
        name: {
          type: 'string',
        },
        grade: {
          type: 'object',
        },
      },
    },
  })
  @Get('teacherCabinet/:class/:subject')
  getStudentsGrade(@Param() params) {
    return this.usersService.getStudentsGrade(params.class, params.subject);
  }

  @ApiOperation({
    summary: 'Получение всех оценок у ученика по id',
  })
  @ApiResponse({
    status: 200,
    schema: {
      properties: {
        id: {
          type: 'number',
        },
        name: {
          type: 'string',
        },
        grade: {
          type: 'object',
        },
      },
    },
  })
  @Get('studentCabinet/:userId')
  getStudentGrade(@Param() params) {
    return this.usersService.getStudentGrade(params.userId);
  }

  @ApiOperation({
    summary: 'Смена роли у пользователя',
  })
  @ApiResponse({
    status: 200,
    schema: {
      properties: {
        role: {
          type: 'string',
        },
        id: {
          type: 'number',
        },
      },
    },
  })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Patch('role')
  changeUserRole(@Body() changeRoleDto: ChangeRoleDto) {
    return this.usersService.changeUserRole(changeRoleDto);
  }

  @ApiOperation({
    summary: 'Смена оценок у пользователя',
  })
  @ApiResponse({
    status: 200,
    schema: {
      properties: {
        id: {
          type: 'number',
        },
        grade: {
          type: 'object',
        },
      },
    },
  })
  @Patch('grade')
  @Roles('TEACHER')
  @UseGuards(RolesGuard)
  changeUserGrade(@Body() ChangeUserGradeDto: ChangeUserGradeDto) {
    return this.usersService.changeUserGrade(ChangeUserGradeDto);
  }
}
