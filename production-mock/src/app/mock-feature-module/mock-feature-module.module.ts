import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MockOtherProductionComponent} from "./components/mock-other-production-component.component";



@NgModule({
  declarations: [
    MockOtherProductionComponent
  ],
  exports: [
    MockOtherProductionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MockFeatureModuleModule { }
