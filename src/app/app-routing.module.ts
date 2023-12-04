import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AboutComponent } from './modules/about/about.component';
import { HelpPageComponent } from './modules/help-page/help-page.component';
import { ChangePasswordComponent } from './modules/change-password/change-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  { path: 'about', component: AboutComponent, title: 'About' },
  { path: 'help', component: HelpPageComponent, title: 'Help' },
  { path: 'change-password', component: ChangePasswordComponent, title: 'Change Password' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
