import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiModule } from './ui/ui.module';
import { ApiProxyModule } from './api-proxy';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    ApiProxyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
