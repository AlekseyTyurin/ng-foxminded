import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {FormListComponent} from "./form-list/form-list.component";

const dashboardRoutes: Routes = [
    // {path: 'dashboard', component: DashboardComponent},
    {path: 'calendar', component: CalendarComponent},
    {path: 'form-list', component: FormListComponent}
];


export const dashboardRouting: ModuleWithProviders =
    RouterModule.forChild(dashboardRoutes);
