import { UsersService } from 'src/users/users.service';
import { Subject } from './subjects.model';
import { UserSubjects } from './user-subjects.model';
export declare class SubjectsService {
    private subjectsRepository;
    private userService;
    private userSubjectsRepository;
    constructor(subjectsRepository: typeof Subject, userService: UsersService, userSubjectsRepository: typeof UserSubjects);
    getAllSubjects(): Promise<Subject[]>;
    getSubjectByName(subjectName: string): Promise<Subject>;
    getGradeById(userId: number): Promise<UserSubjects[]>;
    createDefaultGrade(email: string): Promise<void>;
}
