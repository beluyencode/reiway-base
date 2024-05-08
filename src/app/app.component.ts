import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StorageService } from './services/storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'ngxReiway - Angular 17 Material Design Admin Dashboard Template';

    constructor(storageService: StorageService) {
        const storage = environment.storage === 'session' ? storageService.getSessionStorage() : storageService.getLocalStorage();
        storageService.applyStorage(storage);
    }

}
