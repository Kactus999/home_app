import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { ConfirmDialogComponent } from './common/components/confirm-dialog/confirm-dialog.component';
import { ButtonOutlineComponent } from './common/components/button-outline/button-outline.component';
import { ContactsComponent } from './contacts/contacts.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HousingLocationComponent,
    DetailsComponent,
    ConfirmDialogComponent,
    ButtonOutlineComponent,
    ContactsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
