import { api } from './../shared/Api';
import { objects } from './../shared/Objects';
import { ITransition } from './../shared/ITransition';
import { FlyoutComponent } from './flyout/flyout.component';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { OperationService } from './operation.service';
import { IOperation } from '../shared/IOperation';
import { emptyId } from '../shared/EmptyId';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('flyout') flyout: FlyoutComponent;
  @ViewChild('loadFileInput') loadFileInput: ElementRef<HTMLInputElement>;

  selectedOperationId: number;
  selectedTransitionId: number;
  isDragAndDrop = false;
  pathway: string = null;

  get operations() {
    return this.operationService.operations;
  }

  constructor(private operationService: OperationService,
              private httpClient: HttpClient) { }

  onFileLoaded() {
    this.pathway = this.loadFileInput.nativeElement.value;
  }

  selectOperation(operationId: number, isForced: boolean = false) {
    const isNewValue = isForced || this.selectedTransitionId >= 0 || this.selectedOperationId !== operationId;

    this.isDragAndDrop = isNewValue;
    this.selectedOperationId = isNewValue ? operationId : emptyId;
    this.selectedTransitionId = emptyId;
    this.flyout.setState(isNewValue);
  }

  selectTransition(operationId: number, transitionId: number) {
    const isNewValue = !(operationId === this.selectedOperationId && this.selectedTransitionId === transitionId);

    this.isDragAndDrop = isNewValue;
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

  onDeleteOperation(operationId: number) {
    this.operationService.deleteOperation(operationId);
    this.resetSelection();
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
    this.resetSelection();
  }

  clearAll() {
    if (window.confirm('Вы уверены, что ходите удалить все операции и переходы?')) {
      this.operationService.clearAll();
      this.deselectAll();
    }
  }

  saveToFile() {
    const json = JSON.stringify(this.operationService.operations);

    this.httpClient.post(api.saveFile, { content: json }).pipe().subscribe(() => {
      this.httpClient.get(api.saveFile).pipe().subscribe();
    });
  }

  loadFromFile() {
    this.httpClient.post(api.loadFile, { content: this.pathway }).pipe().subscribe(response => {
      this.operationService.load(response as any);
    });
  }

  onMouseDown() {
    this.isDragAndDrop = true;
  }

  onMouseUp() {
    this.isDragAndDrop = false;
  }

  onOperationMoveStarted(operationId: number) {
    // this.selectedOperationId = operationId;
    // this.selectedTransitionId = emptyId;
    // this.isDragAndDrop = true;
  }

  onOperationMoveEnded(oldOperationId: number) {
    this.operationService.switchOperations(this.selectedOperationId, oldOperationId);
    this.isDragAndDrop = false;
  }

  onTransitionMoveStarted(operationId: number, transitionId: number) {
    // this.selectedOperationId = operationId;
    // this.selectedTransitionId = transitionId;
    // this.isDragAndDrop = true;
  }

  onTransitionMoveEnded(oldOperationId: number, oldTransitionId: number) {
    this.operationService.switchTransitions(this.selectedOperationId, this.selectedTransitionId, oldOperationId, oldTransitionId);
    this.isDragAndDrop = false;
  }

  onDragAndDropEnded() {
    // setTimeout(() => {
    //   this.isDragAndDrop = false;
    // }, 20);
  }

}
