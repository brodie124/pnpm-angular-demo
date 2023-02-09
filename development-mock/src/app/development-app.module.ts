import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DevelopmentAppRoot } from './development-app-root.component';
import {MockFeatureModuleModule} from "../../../production-mock/src/app/mock-feature-module/mock-feature-module.module";
import {AppModule} from "../../../production-mock/src/app/app.module";

@NgModule({
  declarations: [
    DevelopmentAppRoot
  ],
  imports: [
    BrowserModule,
    AppModule,
    MockFeatureModuleModule,
  ],
  providers: [],
  bootstrap: [DevelopmentAppRoot]
})
export class DevelopmentAppModule { }
