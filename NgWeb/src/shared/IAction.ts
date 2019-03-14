import { IName } from './IName';
import { IId } from './IId';

export interface IAction extends IName, IId {
  operationGroups: number[];
}
