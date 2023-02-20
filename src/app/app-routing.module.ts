import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guard/auth-guard';
import { UiHomepageComponent } from './ui-homepage/ui-homepage.component';
import { LoginComponent } from './ui-login/ui-login.component';

const routes: Routes = [
  {
    path: 'help',
    loadChildren: () =>
      import('./quadrinex-help/quadrinex-help.module').then(
        (m) => m.QuadrinexHelpModule
      ),
    // canActivate: [AuthGuard],
  },
  { path: 'home', component: UiHomepageComponent },
  { path: 'homepage', component: UiHomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
