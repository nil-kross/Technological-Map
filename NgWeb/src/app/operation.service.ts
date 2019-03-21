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

    constructor() { }

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

    switchOperations(curOperationId: number, oldOperationId: number): boolean {
      const curOperation = this.operations.find(x => x.id === curOperationId);
      const oldOperation = this.operations.find(x => x.id === oldOperationId);
      let isDone = false;

      if (curOperation && oldOperation) {
        const items = [];

        this._operations.forEach((item, index) => {
          let curItem = item;

          if (item.id === curOperationId) {
            curItem = oldOperation;
            isDone = true;
          }
          if (item.id === oldOperationId) {
            curItem = curOperation;
            isDone = true;
          }
          items.push(curItem);
        });

        this._operations = items;
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

    switchTransitions(curOperationId: number, curTransitionId: number, oldOperationId: number, oldTransitionId: number): boolean {
      const oldOperation = this.operations.find(x => x.id === oldOperationId);
      const curOperation = this.operations.find(x => x.id === curOperationId);
      let isDone = false;

      if (oldOperation && curOperation) {
        const oldTransition = oldOperation.transitions.find(x => x.id === oldTransitionId);
        const curTransition = curOperation.transitions.find(x => x.id === curTransitionId);

        if (oldTransition && curTransition) {
          this._operations.forEach(item => {
            const items = [];

            item.transitions.forEach(x => {
              let curItem = x;

              if (item.id === oldOperationId && x.id === oldTransitionId) {
                curItem = curTransition;
                isDone = true;
              }
              if (item.id === curOperationId && x.id === curTransitionId) {
                curItem = oldTransition;
                isDone = true;
              }
              items.push(curItem);
            });
            Object.assign(item, { transitions: items });
          });
        }
      }

      return isDone;
    }

    load(operations: IOperation[]) {
      this._operations = operations;
    }

    clearAll() {
      this._operations = [];
    }
}
