import { FlyoutComponent } from './flyout/flyout.component';
import { Component, ViewChild } from '@angular/core';
import { OperationService } from './operation.service';

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
    this.selectedOperationId = this.selectedOperationId !== operationId ? operationId : -1;
  }

  selectTransition(transitionId: number) {
    this.selectedTransitionId = this.selectedTransitionId !== transitionId ? transitionId : -1;
  }

  closeFlyout() {
    this.flyout.close();
  }
}
