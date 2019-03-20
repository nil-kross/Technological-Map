import { IOperation } from '../shared/IOperation';
import { operationGroups } from '../shared/OperationGroups';
import { instruments } from '../shared/Instruments';
import { controls } from '../shared/Controls';
import { equipements } from '../shared/Equipment';
import { ITransition } from '../shared/ITransition';
import { actions as actions } from '../shared/Actions';
import { objects } from '../shared/Objects';

export class OperationService {
    private _operations: IOperation[] = [];

    get operations(): IOperation[] {
        return this._operations;
    }

    constructor() {
        const transition: ITransition = {
            actionId: 1,
            action: actions.find(x => x.id === 1),
            object: objects.find(x => x.id === 1),
            objectId: 1,
            measures: [{
              id: 0,
              name: 'D',
              value: 25
            }],
            id: 1
        };
        const kek: IOperation = {
            id: 1,
            operationGroup: operationGroups.find(x => x.id === 1),
            operationGroupId: 1,
            instrument: instruments.find(x => x.id === 1),
            instrumentId: 1,
            control: controls.find(x => x.id === 1),
            controlId: 1,
            equipment: equipements.find(x => x.id === 1),
            equipmentId: 1,
            transitions: [transition]
        };

        this._operations.push(kek);
    }

    add(operation: IOperation) {
      this._operations.push(operation);
    }

    deleteOperation(operationId: number): boolean {
      let isDone = false;
      const operation = this.operations.find(x => x.id === operationId);

      if (operation) {
        this._operations = this._operations.filter(x => x.id !== operationId);
        isDone = true;
      }

      return isDone;
    }

    deleteTransition(operationId: number, transitionId: number): boolean {
      let isDone = false;
      const operation = this.operations.find(x => x.id == operationId);

      if (operation) {
        const transition = operation.transitions.find(x => x.id === transitionId);

        if (transition) {
          Object.assign(operation, { transitions: operation.transitions.filter(x => x.id !== transitionId) });
          isDone = true;
        }
      }

      return isDone;
    }

    clearAll() {
      this._operations = [];
    }
}
