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

  constructor() { }

  onClick() {
    this.state = this.state === FlyoutState.Collapsed ? FlyoutState.Expanded : FlyoutState.Collapsed;
  }

  ngOnInit() {
  }
}
