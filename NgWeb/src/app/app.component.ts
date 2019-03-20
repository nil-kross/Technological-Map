import { ITransition } from './../shared/ITransition';
import { FlyoutComponent } from './flyout/flyout.component';
import { Component, ViewChild } from '@angular/core';
import { OperationService } from './operation.service';
import { IOperation } from '../shared/IOperation';
import { emptyId } from '../shared/EmptyId';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('flyout') flyout: FlyoutComponent;

  selectedOperationId: number;
  selectedTransitionId: number;

  get operations() {
    return this.operationService.operations;
  }

  constructor(private operationService: OperationService) { }

  selectOperation(operationId: number, isForced: boolean = false) {
    const isNewValue = isForced || this.selectedTransitionId >= 0 || this.selectedOperationId !== operationId;

    this.selectedOperationId = isNewValue ? operationId : emptyId;
    this.selectedTransitionId = emptyId;
    this.flyout.setState(isNewValue);
  }

  selectTransition(operationId: number, transitionId: number) {
    const isNewValue = !(operationId === this.selectedOperationId && this.selectedTransitionId === transitionId);

    this.selectedTransitionId = isNewValue ? transitionId : emptyId;
    this.selectedOperationId = isNewValue ? operationId : emptyId;
    this.flyout.setState(isNewValue);
  }

  deselectAll() {
    this.selectOperation(emptyId);
    this.selectTransition(emptyId, emptyId);
  }

  resetSelection() {
    this.selectedTransitionId = emptyId;
    this.selectedOperationId = emptyId;
    this.flyout.close();
  }

  onAddOperation(operation: IOperation) {
    const currOperation = Object.assign(operation, { id: this.operationService.operations.length + 1 });

    this.selectedTransitionId = emptyId;
    this.selectedOperationId = currOperation.id;

    this.operationService.add(currOperation);
  }

  onEditOperation(operation: IOperation) {
    const oldOperation = this.operationService.operations.find(x => x.id === operation.id);
    const currOperation = Object.assign(oldOperation, {
      id: operation.id,
      operationGroup: operation.operationGroup,
      operationGroupId: operation.operationGroupId,
      instrument: operation.instrument,
      instrumentId: operation.instrumentId,
      equipment: operation.equipment,
      equipmentId: operation.equipmentId,
      control: operation.control,
      controlId: operation.controlId
    });

    this.selectedTransitionId = emptyId;
    this.selectedOperationId = operation.id;
  }

  onAddTransition(transition: ITransition) {
    const currOperation = this.operationService.operations.find(x => x.id === this.selectedOperationId);
    const currTransition = Object.assign(transition, { id: currOperation.transitions.length + 1 });

    currOperation.transitions.push(currTransition);
    this.selectedTransitionId = currTransition.id;
  }

  onEditTransition(transition: ITransition) {
    const operation = this.operationService.operations.find(x => x.id === this.selectedOperationId);
    const oldTransition = operation.transitions.find(x => x.id === this.selectedTransitionId);
    const currTransition = Object.assign(oldTransition, {
      id: this.selectedTransitionId,
      action: transition.action,
      actionId: transition.actionId,
      object: transition.object,
      objectId: transition.objectId,
      // measures: transition.measures // TODO
    });

    this.selectedOperationId = operation.id;
    this.selectedTransitionId = transition.id;
  }

  onDeleteTransition(transitionId: number) {
    this.operationService.deleteTransition(this.selectedOperationId, transitionId);
  }

  clearAll() {
    if (window.confirm('Вы уверены, что ходите удалить все операции и переходы?')) {
      this.operationService.clearAll();
      this.deselectAll();
    }
  }
}
