import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ContactComponent } from '../components/contact/contact.component';
import { FormsModule }  from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule, FormsModule
    ],
    declarations: [
        ContactComponent
    ],
    bootstrap: [ ContactComponent ]
})
export class ContactModule { }
