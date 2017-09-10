import {Component, OnInit} from "@angular/core";
import {BikeService} from "../services/bike.service";
// import {IBike} from "./bikes"

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    showMessage: string;
    bikes: IBike[] = [];
    errorMessage: any;

    constructor(private _bikeService: BikeService) {
        // this.bikes = _bikeService.getBikes()
    }

    ngOnInit() {
         this.getBikes()
    }

    getBikes() {
        this._bikeService.getBikes()
            .subscribe(
                bikes => this.bikes = bikes,
                error => this.errorMessage = <any>error
            )
    }

    onLikeClicked(message: string): void {
        this.showMessage = message;
    }

}
