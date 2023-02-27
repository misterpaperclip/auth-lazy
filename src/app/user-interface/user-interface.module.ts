import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FooterComponent,
  HeaderComponent,
  SidebarComponent,
  HomeComponent,
} from './index';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent, SidebarComponent, HomeComponent],
})
export class UserInterfaceModule {}
