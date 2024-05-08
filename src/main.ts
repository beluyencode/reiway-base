import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => {
        (<any>window).appBootstrap && (<any>window).appBootstrap();
    })
    .catch((err) => console.error(err));
