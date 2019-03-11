import { actions } from './../../shared/Actions';
import { Component, OnInit } from '@angular/core';
import { IAction } from '../../shared/IAction';

@Component({
  selector: 'transition-manager',
  templateUrl: './transition-manager.component.html'
})
export class TransitionManagerComponent implements OnInit {
  get actionOptions(): IAction[] {
    return actions;
  }

  constructor() { }

  ngOnInit() {
  }

}
