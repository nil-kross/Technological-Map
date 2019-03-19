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

  selectOperation(operationId: number) {
    const isNewValue = this.selectedOperationId !== operationId;

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

  onAddTransition(transition: ITransition) {
    const currOperation = this.operationService.operations.find(x => x.id === this.selectedOperationId);
    const currTransition = Object.assign(transition, { id: currOperation.transitions.length + 1 });

    currOperation.transitions.push(currTransition);
    this.selectedTransitionId = currTransition.id;
  }


  clearAll() {
    if (window.confirm('Вы уверены, что ходите удалить все операции и переходы?')) {
      this.operationService.clearAll();
      this.deselectAll();
    }
  }
}
