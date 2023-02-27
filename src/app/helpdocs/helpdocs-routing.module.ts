import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpdocsComponent } from './helpdocs.component';
import { QuadrinexComponent } from './quadrinex/quadrinex.component';

const routes: Routes = [{ path: 'quadrinex', component: QuadrinexComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpdocsRoutingModule {}
