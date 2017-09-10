import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DashboardComponent} from "./dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {FormListComponent} from "./form-list/form-list.component";
import {dashboardRouting} from "./dashboard-routing.module";
import { LikeComponent } from './like/like.component';
import {FormsModule} from "@angular/forms";
import {CalendarModule} from "primeng/components/calendar/calendar";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CalendarModule,
        BrowserAnimationsModule,
        dashboardRouting
    ],
    declarations: [
        DashboardComponent,
        CalendarComponent,
        FormListComponent,
        LikeComponent
    ]
})
export class DashboardModule {
}
