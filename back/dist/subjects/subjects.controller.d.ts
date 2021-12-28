import { SubjectsService } from './subjects.service';
export declare class SubjectsController {
    private subjectsService;
    constructor(subjectsService: SubjectsService);
    getAllSubjects(): Promise<import("./subjects.model").Subject[]>;
}
