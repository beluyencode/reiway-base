import { Component } from '@angular/core';
import { MenuItem } from 'src/app/models/menu';
import { MenuService } from 'src/app/services/menu.service';
import { SettingsService } from 'src/app/services/settings.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
    menuItems: Array<MenuItem>;

    panelOpenState = false;
    isToggled = false;

    constructor(private toggleService: ToggleService, public settingsService: SettingsService, menu: MenuService) {
        this.toggleService.isToggled$.subscribe((isToggled) => {
            this.isToggled = isToggled;
        });

        this.menuItems = menu.getMenu();
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
