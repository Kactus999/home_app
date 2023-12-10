import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { HelpPageComponent } from './modules/help-page/help-page.component';
import { AboutComponent } from './modules/about/about.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { HomeComponent } from './modules/home/home.component';
import { MainComponent } from './modules/main/main.component';
const accountModule = () =>
  import('./account/account.module').then((x) => x.AccountModule);
const usersModule = () =>
  import('./users/users.module').then((x) => x.UsersModule);
const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    // loadChildren: mainModule,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        title: 'Home',
      },
      {
        path: 'about',
        component: AboutComponent,
        canActivate: [AuthGuard],
        title: 'About',
      },
      {
        path: 'help',
        component: HelpPageComponent,
        canActivate: [AuthGuard],
        title: 'help',
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        title: 'Profile',
      },
    ],
    canActivate: [AuthGuard],
  },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
