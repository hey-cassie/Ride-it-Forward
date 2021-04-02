import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StatsComponent } from './stats/stats.component';
import { DonationFormComponent } from './donation-form/donation-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    StatsComponent,
    DonationFormComponent,
    NavbarComponent,
    ProfileComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
