import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpdocsRoutingModule } from './helpdocs-routing.module';
import { HelpdocsComponent } from './helpdocs.component';
import { QuadrinexComponent } from './quadrinex/quadrinex.component';


@NgModule({
  declarations: [
    HelpdocsComponent,
    QuadrinexComponent
  ],
  imports: [
    CommonModule,
    HelpdocsRoutingModule
  ]
})
export class HelpdocsModule { }
