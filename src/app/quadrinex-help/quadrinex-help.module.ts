import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuadrinexHelpRoutingModule } from './quadrinex-help-routing.module';
import { QuadrinexHelpComponent } from './quadrinex-help.component';


@NgModule({
  declarations: [
    QuadrinexHelpComponent
  ],
  imports: [
    CommonModule,
    QuadrinexHelpRoutingModule
  ]
})
export class QuadrinexHelpModule { }
