import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HelpPageComponent } from './components/help-page/help-page.component';

@NgModule({
  declarations: [
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
