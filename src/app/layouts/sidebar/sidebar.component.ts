import { Component } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
    panelOpenState = false;

    isToggled = false;

    constructor(
        private toggleService: ToggleService,
        public settingsService: SettingsService
    ) {
        this.toggleService.isToggled$.subscribe(isToggled => {
            this.isToggled = isToggled;
        });
    }

    toggle() {
        this.toggleService.toggle();
    }

    toggleSidebarTheme() {
        this.settingsService.toggleSidebarTheme();
    }

    toggleHideSidebarTheme() {
        this.settingsService.toggleHideSidebarTheme();
    }

}
