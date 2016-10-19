import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ContactComponent } from '../components/contact/contact.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ContactComponent
    ],
    bootstrap: [ ContactComponent ]
})
export class ContactModule { }
