import { DatePipe } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { ToggleService } from 'src/app/services/toggle.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

    isToggled = false;

    constructor(private toggleService: ToggleService, private datePipe: DatePipe, public settingsService: SettingsService) {}

    toggleTheme() {
        this.settingsService.toggleTheme();
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

    toggleCardBorderTheme() {
        this.settingsService.toggleCardBorderTheme();
    }

    toggleHeaderTheme() {
        this.settingsService.toggleHeaderTheme();
    }

    toggleCardBorderRadiusTheme() {
        this.settingsService.toggleCardBorderRadiusTheme();
    }

    toggleRTLEnabledTheme() {
        this.settingsService.toggleRTLEnabledTheme();
    }

    currentDate: Date = new Date();
    formattedDate: any = this.datePipe.transform(this.currentDate, 'dd MMMM yyyy');
}
