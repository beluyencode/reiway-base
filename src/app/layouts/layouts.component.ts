import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../services/settings.service';
import { ToggleService } from '../services/toggle.service';

@Component({
    selector: 'app-layouts',
    templateUrl: './layouts.component.html',
    styleUrl: './layouts.component.scss',
})
export class LayoutsComponent {
    isToggled = false;

    constructor(public router: Router, private toggleService: ToggleService, public settingsService: SettingsService) {
        this.toggleService.isToggled$.subscribe((isToggled) => {
            this.isToggled = isToggled;
        });
    }

    toggleRightSidebarTheme() {
        this.settingsService.toggleRightSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.settingsService.toggleHideSidebarTheme();
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

    toggleRTLEnabledTheme() {
        this.settingsService.toggleRTLEnabledTheme();
    }
}
