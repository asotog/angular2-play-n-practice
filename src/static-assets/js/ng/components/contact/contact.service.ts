import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Contact} from './contact';

@Injectable()
export class ContactService {
    
    constructor(private http: Http) {  }
    
    submit(contact:Contact): Observable<any> {
        // in real world replace this with POST
        return this.http
        .get('/json/contact.json') // GET
        .map((res: Response) => res.json()) // parse
        .do(data => console.log('DATA: ' + JSON.stringify(data))) // log 
        .catch(this._handleError); // handle error
    }
    
    _handleError(error:Response) {
        return Observable.throw(error); // probably add some code here to filter errors
    }
}
