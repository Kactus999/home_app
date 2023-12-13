import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './main.component';
import { AuthGuard } from '../../common/_helpers';

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
      {
        path: 'users',
        loadChildren: () =>
          import('../users/users.module').then((m) => m.UsersModule),
        canActivate: [AuthGuard],
        title: 'Users',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
