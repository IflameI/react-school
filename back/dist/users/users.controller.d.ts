import { ChangeRoleDto } from 'src/roles/dto/change-role-dto';
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
    changeUserRole(changeRoleDto: ChangeRoleDto): Promise<ChangeRoleDto>;
}
