import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { InitSettings, UserData } from '@data/index';
import { SettingsService } from '../settings-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private settings: SettingsService) {}

  isLoggedIn = false;

  canActivate(
    route: ActivatedRouteSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    route;

    if (!InitSettings.isLoggedIn) this.router.navigate(['/login']);
    // else {InitSettings.isLoggedIn}

    return InitSettings.isLoggedIn == undefined
      ? false
      : InitSettings.isLoggedIn;
  }

  logout() {
    this.settings.setStatus(false);
    this.settings.setLoginBtn(true);
    this.settings.setLogoutBtn(false);
    this.settings.setSidebar(false);

    this.router.navigate(['/login']);
  }

  login(username: string, password: string) {
    this.isLoggedIn = UserData.some(
      (d: { username: string; password: string }) => {
        return d.username === username && d.password === password;
      }
    );

    if (this.isLoggedIn) {
      this.settings.setStatus(true);
      this.settings.setLoginBtn(false);
      this.settings.setLogoutBtn(true);
      this.settings.setSidebar(true);

      this.router.navigate(['/help/quadrinex']);
    }

    return this.isLoggedIn;
  }
}
