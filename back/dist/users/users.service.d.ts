import { ChangeRoleDto } from 'src/roles/dto/change-role-dto';
import { RolesService } from 'src/roles/roles.service';
import { UserRoles } from 'src/roles/user-roles.model';
import { ChangeUserGradeDto } from 'src/subjects/dto/change-user-grade-dto';
import { UserSubjects } from 'src/subjects/user-subjects.model';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
export declare class UsersService {
    private userRepository;
    private roleService;
    private userSubjectsRepository;
    private userRolesRepository;
    constructor(userRepository: typeof User, roleService: RolesService, userSubjectsRepository: typeof UserSubjects, userRolesRepository: typeof UserRoles);
    createUser(dto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(email: string): Promise<User>;
    getUserInfoByEmail(email: string): Promise<{
        role: string;
        name: string;
        userClass: string;
    }>;
    getStudentsGrade(userClass: string, subject: string): Promise<{
        id: number;
        name: string;
        grade: import("../subjects/subjects.model").Subject;
    }[]>;
    getTeacherAndStudent(): Promise<{
        id: number;
        name: string;
        role: string;
    }[]>;
    changeUserRole(dto: ChangeRoleDto): Promise<ChangeRoleDto>;
    changeUserGrade(dto: ChangeUserGradeDto): Promise<{
        id: any;
        grade: any;
    }[]>;
}
