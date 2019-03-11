import { Component, OnInit, EventEmitter, Output } from '@angular/core';

enum FlyoutState {
  Collapsed = 0,
  Expanded = 1
}

@Component({
  selector: 'app-flyout',
  templateUrl: './flyout.component.html',
  styleUrls: ['./flyout.component.less']
})
export class FlyoutComponent implements OnInit {
  state: FlyoutState = FlyoutState.Collapsed;

  get isOpened(): boolean {
    return this.state === FlyoutState.Expanded;
  }

  constructor() { }

  close() {
    this.setFlyoutState(false);
  }

  onClick(isOpened: boolean) {
    this.setFlyoutState(isOpened);
  }

  ngOnInit() {
  }

  private setFlyoutState(isOpened: boolean) {
    this.state = isOpened ? FlyoutState.Expanded : FlyoutState.Collapsed;
  }
}
