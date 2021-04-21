import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.gaurd';
import { DonationFormComponent } from './donation-form/donation-form.component';

import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent}, //canActivate: [AuthGuard] not working as expected
    { path: 'savings', component: StatsComponent}, //canActivate: [AuthGuard]
    { path: 'donate', component: DonationFormComponent}, //canActivate: [AuthGuard]
    { path: 'auth', component: AuthComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}