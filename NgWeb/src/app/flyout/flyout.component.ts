import { Component, OnInit } from '@angular/core';

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

  onClick(isOpened: boolean) {
    this.setFlyoutState(isOpened);
    console.log(this.state);
  }

  ngOnInit() {
  }

  private setFlyoutState(isOpened: boolean) {
    this.state = isOpened ? FlyoutState.Expanded : FlyoutState.Collapsed;
  }
}
