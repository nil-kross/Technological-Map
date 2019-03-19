import { ITransition } from './../../shared/ITransition';
import { actions } from './../../shared/Actions';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { IAction } from '../../shared/IAction';
import { objects } from '../../shared/Objects';
import { IObject } from '../../shared/IObject';
import { OperationService } from '../operation.service';
import { emptyId } from '../../shared/EmptyId';

@Component({
  selector: 'transition-manager',
  templateUrl: './transition-manager.component.html'
})
export class TransitionManagerComponent implements OnInit {
  @Input() operationId: number;
  @Input() transitionId: number;
  @ViewChild('actionSelect') actionSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('objectSelect') objectSelect: ElementRef<HTMLSelectElement>;
  @Output() addTransition = new EventEmitter<ITransition>();

  objectId = 0;
  actionId = 0;

  get actionOptions(): IAction[] {
    return actions;
  }

  get objectOptions(): IObject[] {
    return objects;
  }

  get isFormValid(): boolean {
    const isValid = this.objectId > 0 &&
                    this.actionId > 0;

    return isValid;
  }

  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (this.operationId >= 0 && this.transitionId >= 0) {
        this.patchUi();
      }
    }
  }

  onActionChange() {
    this.actionId = +this.actionSelect.nativeElement.value;
  }

  onObjectChange() {
    this.objectId = +this.objectSelect.nativeElement.value;
  }

  onAddButtonClick() {
    const action = actions.find(x => x.id === this.actionId);
    const object = objects.find(x => x.id === this.objectId);
    const transition: ITransition = {
      id: 0,
      actionId: this.actionId,
      action: action,
      objectId: this.objectId,
      object: object,
      measures: [] // TODO
    };

    this.addTransition.emit(transition);
  }

  private patchUi() {
    let objectId = emptyId;
    let actionId = emptyId;

    if (this.operationId >= 0 &&
        this.transitionId >= 0) {
      const operation = this.operationService.operations.find(x => x.id === this.operationId);
      const transition = operation.transitions.find(x => x.id === this.transitionId);

      if (transition) {
        objectId = transition.objectId;
        actionId = transition.actionId;
      }
    }


    this.actionId = actionId;
    this.objectId = objectId;
  }
}
