import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuperUiLibModule } from 'super-ui-lib';
import { DecodedFrontendComponent } from './supepr-components/decoded-frontend/decoded-frontend.component';

@NgModule({
  declarations: [
    AppComponent,
    DecodedFrontendComponent
  ],
  imports: [
    BrowserModule,
    SuperUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
