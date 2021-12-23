import { AddRoleDto } from 'src/roles/dto/add-role-dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateUserDto): Promise<User>;
    getUserInfoByEmail(params: any): Promise<{
        role: string;
        name: string;
        userClass: string;
    }>;
    getTeacherAndStudent(): Promise<{
        id: number;
        name: string;
        role: string;
    }[]>;
    addRole(addRoleDto: AddRoleDto): Promise<AddRoleDto>;
}
