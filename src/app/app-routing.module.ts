import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { AboutComponent } from './modules/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'profile', component: ProfileComponent, title: 'Profile' },
  { path: 'about', component: AboutComponent, title: 'About' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
