import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel }  from '@angular/forms';

import {Contact} from './contact';
import {ContactService} from './contact.service';

@Component({
    selector: 'contact',
    templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {
    
    submitted: boolean = false;
    
    contact: Contact = {region: ''};
    
    constructor(private contactService:ContactService) {  }
    
    ngOnInit() {}
    
    showFieldErrors(field:NgModel): boolean {
        return field.errors && (this.submitted || field.dirty || field.touched);
    }
    
    submit(event:any, contactForm:NgForm): void {
        event.preventDefault();
        this.submitted = true;
        if (contactForm.form.valid) {
            this.contactService.submit(this.contact)
                .subscribe(arg => alert(arg.message), 
                    error => console.error(error));
        }
    }
}
