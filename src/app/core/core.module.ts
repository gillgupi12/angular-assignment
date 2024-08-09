import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { MyRetirementModule } from '../shared/components/retirement/retirement.module';

@NgModule({
  declarations: [],
  imports:[LayoutComponent, MyRetirementModule],
  exports: [
    LayoutComponent, MyRetirementModule
  ]
})
export class CoreModule { }