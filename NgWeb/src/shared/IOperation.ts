import { IId } from './IId';
import { IInstrument } from './IInstrument';
import { IOperationGroup } from './IOperationGroup';
import { IEquipment } from './IEquipment';
import { IControl } from './IControl';
import { ITransition } from './ITransition';

export interface IOperation extends IId {
    group: IOperationGroup;
    groupId: number;
    instrument: IInstrument;
    instrumentId: number;
    equipment: IEquipment;
    equipmentId: number;
    control: IControl;
    controlId: number;
    transitions: ITransition[];
}
