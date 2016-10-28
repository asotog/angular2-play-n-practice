/**
 * This is the main bootstrapping file where all the modules are bootstrapped
 *  
 * 
 */

require('../css/main.scss');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './ng/modules/app.module';
import { ContactModule } from './ng/modules/contact.module';
import { OuterDataModule } from './ng/modules/outer-data.module';
import { Config } from './ng/components/miscellaneous/config';

if (process.env.ENV === 'production') {
    enableProdMode();
}

/**
 * App: this is the landing app, shows the page links to the samples
 */
if (document.querySelector('app')) {
    platformBrowserDynamic().bootstrapModule(AppModule);
}

/**
 * Contact: this is a contact form app, shows how to use validations, service call and regular form coding
 */
if (document.querySelector('contact')) {
    platformBrowserDynamic().bootstrapModule(ContactModule);
}

/**
 * Outer Data App: shows how to pass data from the bootstrapping process, for example read a root element data-attribute and 
 * use the value to be injected into the app
 */
if (document.querySelector('outer-data-app')) {
    const dataValue = JSON.parse(document.querySelector('outer-data-app').getAttribute('data-config'));
    const config:Config = new Config(dataValue)
    
    platformBrowserDynamic([{provide: Config, useValue: config}])
        .bootstrapModule(OuterDataModule);
}
