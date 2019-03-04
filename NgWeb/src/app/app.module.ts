import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FlyoutComponent } from './flyout/flyout.component';
import { OperationService } from './operation.service';


@NgModule({
  declarations: [
    AppComponent,
    FlyoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  providers: [
    OperationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
