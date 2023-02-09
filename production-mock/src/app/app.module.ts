import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductionRootComponent } from './production-root.component';
import {MockSomeProductionComponent} from "./components/mock-some-production-component/mock-some-production-component.component";
import {MockFeatureModuleModule} from "./mock-feature-module/mock-feature-module.module";
import {MockOtherProductionComponent} from "./mock-feature-module/components/mock-other-production-component.component";

@NgModule({
  declarations: [
    ProductionRootComponent,
    MockSomeProductionComponent,
  ],
  imports: [
    BrowserModule,
    MockFeatureModuleModule
  ],
  providers: [],
  exports: [
    MockOtherProductionComponent,
    MockSomeProductionComponent
  ],
  bootstrap: [ProductionRootComponent]
})
export class AppModule { }
