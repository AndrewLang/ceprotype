/*
*/ 
import { ModuleWithProviders }              from '@angular/core';
import { Routes, RouterModule }             from '@angular/router';

import { AppComponent }                     from './components/app.component';
import { WelcomeComponent }                 from './components/welcome.component';

const rootRoutes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'welcome', component: WelcomeComponent },
];

const appRoutes: Routes = [
    ...rootRoutes
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);