import { IId } from './IId';
import { IName } from './IName';

export interface IMeasure extends IId, IName {
    value: number;
}
