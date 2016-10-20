import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel }  from '@angular/forms';

import {Contact} from './contact';

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
    
    submitted: boolean = false;
    
    contact: Contact = {region: ''};
    
    constructor() {  }
    
    ngOnInit() {}
    
    showFieldErrors(field:NgModel) {
        return field.errors && (this.submitted || field.dirty || field.touched);
    }
    
    submit(event:any, contactForm:NgForm) {
        event.preventDefault();
        this.submitted = true;
        if (contactForm.form.valid) {
            
        }
    }
}
