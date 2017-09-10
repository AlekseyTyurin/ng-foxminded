import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {ManagersComponent} from "./managers/managers.component";
import {DashboardModule} from "./dashboard/dashboard.module";
import {appRouting} from "./app-routing.module";
import {BikeService} from "./services/bike.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        ManagersComponent,

    ],
    imports: [
        BrowserModule,
        DashboardModule,
        FormsModule,
        HttpModule,
        appRouting
    ],
    providers: [
        BikeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
