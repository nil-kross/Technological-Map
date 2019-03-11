import { FlyoutComponent } from './flyout/flyout.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @ViewChild('flyout') flyout: FlyoutComponent;

  title = 'app';

  closeFlyout() {
    this.flyout.close();
  }
}
