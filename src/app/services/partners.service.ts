import { Injectable } from '@angular/core';
import { Group } from 'app/models/element';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from 'environments/environment';

@Injectable()
export class PartnersService {

    constructor(private http: Http) { }

    getAllPartners(): Observable<Array<Group>> {
        return this.http.get(environment.url.partners)
            .map((response) => <Array<Group>>(response.json().partners));
    }
}
