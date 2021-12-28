import { Subject } from './subjects.model';
export declare class SubjectsService {
    private subjectsRepository;
    constructor(subjectsRepository: typeof Subject);
    getAllSubjects(): Promise<Subject[]>;
}
