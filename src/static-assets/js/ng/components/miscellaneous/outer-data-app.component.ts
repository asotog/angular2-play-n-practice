import { Component, OnInit } from '@angular/core';
import { Config } from './config';

@Component({
    selector: 'outer-data-app',
    template: `
    <h3>Data:</h3>
    <pre>{{config | json}}</pre>
    `,
})
export class OuterDataAppComponent implements OnInit {
    
    constructor(private config:Config) {  }
    
    ngOnInit() {}
}
