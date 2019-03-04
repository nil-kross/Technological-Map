import { IAction } from "./IAction";
import { IObject } from "./IObject";
import { IMeasure } from "./IMeasure";

export interface ITransition {
    action: IAction;
    object: IObject;
    measures: IMeasure[];
}