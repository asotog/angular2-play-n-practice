require('../css/main.scss');
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './ng/modules/app.module';
import { ContactModule } from './ng/modules/contact.module';

if (process.env.ENV === 'production') {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
platformBrowserDynamic().bootstrapModule(ContactModule);
