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

if (document.querySelector('app')) {
    platformBrowserDynamic().bootstrapModule(AppModule);
}

if (document.querySelector('contact')) {
    platformBrowserDynamic().bootstrapModule(ContactModule);
}

if (document.querySelector('outer-data-app')) {
    const dataValue = JSON.parse(document.querySelector('outer-data-app').getAttribute('data-config'));
    const config:Config = new Config(dataValue)
    
    platformBrowserDynamic([{provide: Config, useValue: config}])
        .bootstrapModule(OuterDataModule);
}
