import {Component} from "@angular/core";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent {
    title = 'World!';
    public title2: string = "Goloseevo";
    number: number = 50;
    public bootStyle: string = "btn-warning";
    public btnClass: string = "btn";
    bootStyle2: string = "btn-primary";
    background: any = "background: green;"
}
