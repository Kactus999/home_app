import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './components/layout.component';
import { ListComponent } from './components/list.component';
import { AddEditComponent } from './components/add-edit.component';
import { AlertComponent } from '../../common/_components';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule],
  declarations: [
    LayoutComponent,
    ListComponent,
    AddEditComponent,
    AlertComponent,
  ],
})
export class UsersModule {}
