import { NgModule } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeComponent } from '../home/home.component';
import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../about/about.component';
// import { HelpPageComponent } from '../help-page/help-page.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HelpPageComponent } from '../help-page/help-page.component';

@NgModule({
  declarations: [
    // HomeComponent,
    // ProfileComponent,
    // AboutComponent,
    // ChangePasswordComponent,
    // SidebarComponent,
    ProfileComponent,
    AboutComponent,
    HomeComponent,
    ChangePasswordComponent,
    HelpPageComponent,
  ],
  imports: [MainRoutingModule],
  providers: [],
  bootstrap: [MainComponent],
})
export class MainModule {}
