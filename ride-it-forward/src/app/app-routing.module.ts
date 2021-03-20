import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationFormComponent } from './donation-form/donation-form.component';

import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/profile', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent },
    { path: 'savings', component: StatsComponent},
    { path: 'donate', component: DonationFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}