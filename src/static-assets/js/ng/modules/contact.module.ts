import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ContactComponent } from '../components/contact/contact.component';
import { ContactService } from '../components/contact/contact.service';

@NgModule({
    imports: [ BrowserModule, FormsModule, HttpModule ],
    declarations: [ ContactComponent ],
    providers: [ ContactService ],
    bootstrap: [ ContactComponent ]
})
export class ContactModule { }
