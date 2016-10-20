import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import {OuterDataAppComponent} from '../components/miscellaneous/outer-data-app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ OuterDataAppComponent ],
  providers: [],
  bootstrap: [OuterDataAppComponent]
})
export class OuterDataModule { }
