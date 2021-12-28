import { Model } from 'sequelize-typescript';
import { User } from 'src/users/users.model';
export declare class Subject extends Model<Subject> {
    id: number;
    subjectName: string;
    users: User[];
}
