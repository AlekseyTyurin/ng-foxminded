import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

const appRoutes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent}
    // {path: '**', component: DashboardComponent}
];

export const appRouting: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);
