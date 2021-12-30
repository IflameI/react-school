import { Subject } from './subjects.model';
import { UserSubjects } from './user-subjects.model';
export declare class SubjectsService {
    private subjectsRepository;
    private userSubjectsRepository;
    constructor(subjectsRepository: typeof Subject, userSubjectsRepository: typeof UserSubjects);
    getAllSubjects(): Promise<Subject[]>;
    getSubjectByName(subjectName: string): Promise<Subject>;
    getGradeById(userId: number): Promise<UserSubjects[]>;
}
