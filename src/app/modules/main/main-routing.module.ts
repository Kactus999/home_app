import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { AboutComponent } from '../about/about.component';
import { HelpPageComponent } from '../help-page/help-page.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { HomeComponent } from '../home/home.component';
import { MainComponent } from './main.component';
import { AuthGuard } from '@app/_helpers';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'main',
    children: [
      {
        path: '',
        component: HomeComponent,
        title: 'Home',
        canActivate: [AuthGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        title: 'Profile',
        canActivate: [AuthGuard],
      },
      {
        path: 'about',
        component: AboutComponent,
        title: 'About',
        canActivate: [AuthGuard],
      },
      {
        path: 'help',
        component: HelpPageComponent,
        title: 'Help',
        canActivate: [AuthGuard],
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        title: 'Change Password',
        canActivate: [AuthGuard],
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
