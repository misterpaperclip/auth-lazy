import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user-interface';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'helpdocs',
    loadChildren: () =>
      import('./helpdocs/helpdocs.module').then((m) => m.HelpdocsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
