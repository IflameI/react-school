import { Model } from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { Subject } from 'src/subjects/subjects.model';
interface UserCreationAttrs {
    email: string;
    password: string;
}
export declare class User extends Model<User, UserCreationAttrs> {
    id: number;
    email: string;
    password: string;
    banned: boolean;
    banReason: string;
    name: string;
    userClass: string;
    roles: Role[];
    subjects: Subject[];
}
export {};
