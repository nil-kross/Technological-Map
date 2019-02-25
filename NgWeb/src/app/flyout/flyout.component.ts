import { Component, OnInit } from '@angular/core';

enum FlyoutState {
  Collapsed = 0,
  Expanded
}

@Component({
  selector: 'app-flyout',
  templateUrl: './flyout.component.html',
  styleUrls: ['./flyout.component.css']
})
export class FlyoutComponent implements OnInit {
  state: FlyoutState = FlyoutState.Collapsed;

  constructor() { }

  onClick() {
    this.state = this.state == FlyoutState.Collapsed ? FlyoutState.Expanded : FlyoutState.Collapsed;
  }

  ngOnInit() {
  }
}
