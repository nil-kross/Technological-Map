import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlyoutComponent } from './flyout/flyout.component';
import { MapFrameComponent } from './map/map-frame/map-frame.component';
import { OperationService } from './operation.service';


@NgModule({
  declarations: [
    AppComponent,
    FlyoutComponent,
    MapFrameComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    OperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
