import { FlyoutComponent } from './flyout/flyout.component';
import { Component, ViewChild } from '@angular/core';
import { OperationService } from './operation.service';
import { IOperation } from '../shared/IOperation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('flyout') flyout: FlyoutComponent;

  selectedOperationId: number;
  selectedTransitionId: number;

  private emptyId = -1;

  get operations() {
    return this.operationService.operations;
  }

  constructor(private operationService: OperationService) { }

  selectOperation(operationId: number) {
    const isNewValue = this.selectedOperationId !== operationId;

    this.selectedOperationId = isNewValue ? operationId : this.emptyId;
    this.selectedTransitionId = this.emptyId;
    this.flyout.setState(isNewValue);
  }

  selectTransition(transitionId: number) {
    const isNewValue = this.selectedTransitionId !== transitionId;

    this.selectedTransitionId = isNewValue ? transitionId : this.emptyId;
    this.selectedOperationId = this.emptyId;
    this.flyout.setState(isNewValue);
  }

  closeFlyout() {
    this.flyout.close();
  }

  onAddOperation(operation: IOperation) {
    this.selectedOperationId = -1;
    this.selectedTransitionId = -1;
  }
}
