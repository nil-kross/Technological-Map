import { actions } from './../../shared/Actions';
import { Component, OnInit } from '@angular/core';
import { IAction } from '../../shared/IAction';
import { objects } from '../../shared/Objects';
import { IObject } from '../../shared/IObject';

@Component({
  selector: 'transition-manager',
  templateUrl: './transition-manager.component.html'
})
export class TransitionManagerComponent implements OnInit {
  get actionOptions(): IAction[] {
    return actions;
  }

  get objectOptions(): IObject[] {
    return objects;
  }

  constructor() { }

  ngOnInit() {
  }

}
