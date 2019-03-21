import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlyoutComponent } from './flyout/flyout.component';
import { MapFrameComponent } from './map/map-frame/map-frame.component';
import { OperationService } from './operation.service';
import { OperationManagerComponent } from './operation-manager/operation-manager.component';
import { TransitionManagerComponent } from './transition-manager/transition-manager.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    FlyoutComponent,
    MapFrameComponent,
    OperationManagerComponent,
    TransitionManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    OperationService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
