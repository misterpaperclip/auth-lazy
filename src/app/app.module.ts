import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiSidebarComponent } from './ui-sidebar/ui-sidebar.component';
import { UiHomepageComponent } from './ui-homepage/ui-homepage.component';
import { UiFooterComponent } from './ui-footer/ui-footer.component';
import { UiHeaderComponent } from './ui-header/ui-header.component';
import { LoginComponent } from './ui-login/ui-login.component';

@NgModule({
  declarations: [
    AppComponent,
    UiSidebarComponent,
    UiHomepageComponent,
    UiFooterComponent,
    UiHeaderComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
