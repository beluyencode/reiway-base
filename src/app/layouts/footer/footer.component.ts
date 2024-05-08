import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    constructor(public settingsService: SettingsService) {

    }

    toggleCardBorderTheme() {
        this.settingsService.toggleCardBorderTheme();
    }

    toggleTheme() {
        this.settingsService.toggleTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.settingsService.toggleCardBorderRadiusTheme();
    }
}
