import { IOperation } from "../shared/IOperation";
import { operationGroups } from "../shared/OperationGroups";
import { instruments } from "../shared/Instruments";
import { controls } from "../shared/Controls";
import { equipements } from "../shared/Equipment";
import { ITransition } from "../shared/ITransition";
import { Actions } from "../shared/Actions";
import { objects } from "../shared/Objects";

export class OperationService {
    private _operations: IOperation[] = [];

    get operations(): IOperation[] {
        return this._operations;
    }

    constructor() {
        const transition: ITransition = {
            action: Actions.find(x => x.id === 1),
            object: objects.find(x => x.id === 1),
            measures: []
        };
        const kek: IOperation = {
            group: operationGroups.find(x => x.id === 1),
            instrument: instruments.find(x => x.id === 1),
            control: controls.find(x => x.id === 1),
            equipment: equipements.find(x => x.id === 1),
            transitions: [transition]
        };

        this._operations.push(kek);
    }
}
