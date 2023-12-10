import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../about/about.component';
import { HelpPageComponent } from '../help-page/help-page.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { HomeComponent } from '../home/home.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: 'a',
    component: MainComponent,
    title: 'main',
    children: [
      { path: '', component: HomeComponent, title: 'Home' },
      { path: 'profile', component: ProfileComponent, title: 'Profile' },
      { path: 'about', component: AboutComponent, title: 'About' },
      { path: 'help', component: HelpPageComponent, title: 'Help' },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        title: 'Change Password',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
export const ArrayOfComponents = [
  HomeComponent,
  ProfileComponent,
  AboutComponent,
  HelpPageComponent,
];
