import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class BikeService {

    constructor(private _http: Http) {
    }

    getBikes(): Observable<IBike[]> {
        return this._http.get('/assets/road-bikes.json')
            .map((response: Response) => <IBike[]> response.json());
    }
}
