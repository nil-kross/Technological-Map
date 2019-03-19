import { ITransition } from './../../shared/ITransition';
import { actions } from './../../shared/Actions';
import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { IAction } from '../../shared/IAction';
import { objects } from '../../shared/Objects';
import { IObject } from '../../shared/IObject';

@Component({
  selector: 'transition-manager',
  templateUrl: './transition-manager.component.html'
})
export class TransitionManagerComponent implements OnInit {
  @ViewChild('actionSelect') actionSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('objectSelect') objectSelect: ElementRef<HTMLSelectElement>;
  @Output() addTransition = new EventEmitter<ITransition>();

  objectId = 0;
  actionId = 0;
  transitionId = 0;

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

  constructor() { }

  ngOnInit() {
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
}
