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

  selectTransition(transitionId: number) {
    const isNewValue = this.selectedTransitionId !== transitionId;

    this.selectedTransitionId = isNewValue ? transitionId : emptyId;
    this.selectedOperationId = emptyId;
    this.flyout.setState(isNewValue);
  }

  deselectAll() {
    this.selectOperation(emptyId);
    this.selectTransition(emptyId);
  }

  closeFlyout() {
    // this.selectedOperationId = emptyId;
    // this.selectedTransitionId = emptyId;
    this.flyout.close();
  }

  onAddOperation(operation: IOperation) {
    this.selectedOperationId = operation.id;
    this.selectedTransitionId = undefined;
    //this.flyout.close();
  }

  clearAll() {
    if (window.confirm('Вы уверены, что ходите удалить все операции и переходы?')) {
      this.operationService.clearAll();
      this.deselectAll();
    }
  }
}
