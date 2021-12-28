import { Model } from 'sequelize-typescript';
export declare class UserSubjects extends Model<UserSubjects> {
    id: number;
    gradeFirstPer: number;
    gradeSecondPer: number;
    gradeThirdPer: number;
    gradeFourPer: number;
    subjectId: number;
    userId: number;
}
