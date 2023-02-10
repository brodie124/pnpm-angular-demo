import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DevelopmentAppRoot } from './development-app-root.component';
import {AppModule} from "../../../production-mock/src/app/app.module";

@NgModule({
  declarations: [
    DevelopmentAppRoot
  ],
  imports: [
    BrowserModule,
    AppModule,
  ],
  providers: [],
  bootstrap: [DevelopmentAppRoot]
})
export class DevelopmentAppModule { }
