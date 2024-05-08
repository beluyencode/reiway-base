import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
    isToggled = false;

    constructor(
        public settingsService: SettingsService
    ) {
        this.settingsService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggleTheme() {
        this.settingsService.toggleTheme();
    }

    toggleSidebarTheme() {
        this.settingsService.toggleSidebarTheme();
    }

    toggleRightSidebarTheme() {
        this.settingsService.toggleRightSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.settingsService.toggleHideSidebarTheme();
    }

    toggleHeaderTheme() {
        this.settingsService.toggleHeaderTheme();
    }

    toggleCardBorderTheme() {
        this.settingsService.toggleCardBorderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.settingsService.toggleCardBorderRadiusTheme();
    }

    toggle() {
        this.settingsService.toggle();
    }

    toggleRTLEnabledTheme() {
        this.settingsService.toggleRTLEnabledTheme();
    }
}
