import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Roles } from 'src/auth/roles-auth-decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { CreateRoleDto } from './dto/create-role-dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';

@ApiTags('Роли пользователей')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  //Только для бэка
  @ApiOperation({ summary: 'Создать роль' })
  @ApiResponse({ status: 201, type: CreateRoleDto })
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Получить все существующие роли' })
  @ApiResponse({ status: 200, type: Role })
  @Get()
  getAllRoles() {
    return this.roleService.getAllRoles();
  }
}
