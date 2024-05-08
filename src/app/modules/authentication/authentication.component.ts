import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {

    constructor(
        public settingsService: SettingsService
    ) {}

    toggleTheme() {
        this.settingsService.toggleTheme();
    }

    toggleCardBorderTheme() {
        this.settingsService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.settingsService.toggleCardBorderRadiusTheme();
    }

    toggleRTLEnabledTheme() {
        this.settingsService.toggleRTLEnabledTheme();
    }
}
