import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ProductionRootComponent } from './production-root.component';
import {MockSomeProductionComponent} from "./components/mock-some-production-component/mock-some-production-component.component";

@NgModule({
  declarations: [
    ProductionRootComponent,
    MockSomeProductionComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  exports: [
    MockSomeProductionComponent
  ],
  bootstrap: [ProductionRootComponent]
})
export class AppModule { }
