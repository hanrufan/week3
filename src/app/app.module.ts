import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './components/content/content.component';
import { NavComponent } from './components/nav/nav.component';
import { Widget3Component } from './components/widget3/widget3.component';
import { Widget2Component } from './components/widget2/widget2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavComponent,
    Widget3Component,
    Widget2Component,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
