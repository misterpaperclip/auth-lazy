import { Injectable } from '@angular/core';
import { InitSettings } from '@app/data/index';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private loginBtnSubject = new Subject<boolean>();
  private logoutBtnSubject = new Subject<boolean>();
  private sidebarSubject = new Subject<boolean>();
  private statusSubject = new Subject<boolean>();

  loginBtn$ = this.loginBtnSubject.asObservable();
  logoutBtn$ = this.logoutBtnSubject.asObservable();
  sidebar$ = this.sidebarSubject.asObservable();
  status$ = this.statusSubject.asObservable();

  getSettings() {
    return InitSettings;
  }

  setLoginBtn(setter: boolean) {
    this.loginBtnSubject.next(setter);
  }

  setLogoutBtn(setter: boolean) {
    this.logoutBtnSubject.next(setter);
  }

  setSidebar(setter: boolean) {
    this.sidebarSubject.next(setter);
  }

  setStatus(setter: boolean) {
    this.statusSubject.next(setter);
  }
}
