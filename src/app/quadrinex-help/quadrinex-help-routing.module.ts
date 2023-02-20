import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/ui-login/ui-login.component';
import { QuadrinexHelpComponent } from './quadrinex-help.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'quadrinex', component: QuadrinexHelpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuadrinexHelpRoutingModule {}
