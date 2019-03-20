import { IId } from './IId';

export interface IObject extends IId {
    fullname: string;
    shortname: string;
    operationGroups: number[];
}
