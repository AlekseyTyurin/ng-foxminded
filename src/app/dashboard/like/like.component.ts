import {Component, OnInit, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'app-like',
    templateUrl: './like.component.html',
    styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

    @Input() reviews: number; classChange: string;

    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    onClick():void {
        this.notify.emit("Thank you! I'm from child");
        this.classChange = "green";
    }


    constructor() {
    }

    ngOnInit() {
    }

}
