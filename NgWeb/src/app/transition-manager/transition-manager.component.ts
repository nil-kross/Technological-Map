import { ITransition } from './../../shared/ITransition';
import { actions } from './../../shared/Actions';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IAction } from '../../shared/IAction';
import { objects } from '../../shared/Objects';
import { IObject } from '../../shared/IObject';
import { OperationService } from '../operation.service';
import { emptyId } from '../../shared/EmptyId';

@Component({
  selector: 'transition-manager',
  templateUrl: './transition-manager.component.html'
})
export class TransitionManagerComponent implements OnInit, OnChanges {
  @Input() operationId: number;
  @Input() transitionId: number;
  @ViewChild('actionSelect') actionSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('objectSelect') objectSelect: ElementRef<HTMLSelectElement>;
  @Output() addTransition = new EventEmitter<ITransition>();
  @Output() editTransition = new EventEmitter<ITransition>();
  @Output() deleteTransition = new EventEmitter<number>();

  objectId = emptyId;
  actionId = emptyId;

  get actionOptions(): IAction[] {
    let options = actions;

    if (this.operationId > emptyId) {
      const operation = this.operationService.operations.find(x => x.id === this.operationId);

      options = options.map(x => {
        if (x.operationGroups.includes(operation.operationGroupId)) {
          return x;
        }
      }).filter(x => x);
    }

    return options;
  }

  get objectOptions(): IObject[] {
    let options = objects;

    if (this.actionId > emptyId) {
      options = options.map(x => {
        if (x.actionIds.includes(this.actionId)) {
          return x;
        }
      }).filter(x => x);
    }

    return options;
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
    this.objectId = emptyId;
  }

  onObjectChange() {
    this.objectId = +this.objectSelect.nativeElement.value;
  }

  onAddButtonClick() {
    const transition = this.buildTransitionFromForm();

    if (transition) {
      this.addTransition.emit(transition);
    }
  }

  onEditButtonClick() {
    let transition = this.buildTransitionFromForm();

    if (transition) {
      transition = Object.assign(transition, { id: this.transitionId });

      this.editTransition.emit(transition);
    }
  }

  onDeleteButtonClick() {
    this.deleteTransition.emit(this.transitionId);
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

  private buildTransitionFromForm(): ITransition {
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

    return transition;
  }
}
