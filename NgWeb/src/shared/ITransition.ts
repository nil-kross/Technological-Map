import { IAction } from './IAction';
import { IObject } from './IObject';
import { IMeasure } from './IMeasure';
import { IId } from './IId';

export interface ITransition extends IId {
    action: IAction;
    object: IObject;
    measures: IMeasure[];
}
