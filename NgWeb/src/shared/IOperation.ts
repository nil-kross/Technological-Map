import { IInstrument } from "./IInstrument";
import { IOperationGroup } from "./IOperationGroup";
import { IEquipment } from "./IEquipment";
import { IControl } from "./IControl";
import { ITransition } from "./ITransition";

export interface IOperation {
    group: IOperationGroup;
    instrument: IInstrument;
    equipment: IEquipment;
    control: IControl;
    transitions: ITransition[];
}