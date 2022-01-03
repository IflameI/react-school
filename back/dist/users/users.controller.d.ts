import { ChangeRoleDto } from 'src/roles/dto/change-role-dto';
import { ChangeUserGradeDto } from 'src/subjects/dto/change-user-grade-dto';
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
    getStudentsGrade(params: any): Promise<{
        id: number;
        name: string;
        grade: import("../subjects/subjects.model").Subject[];
    }[]>;
    changeUserRole(changeRoleDto: ChangeRoleDto): Promise<ChangeRoleDto>;
    changeUserGrade(ChangeUserGradeDto: ChangeUserGradeDto): Promise<import("../subjects/user-subjects.model").UserSubjects>;
}
