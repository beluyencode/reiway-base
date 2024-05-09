import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu';

@Injectable({
    providedIn: 'root',
})
export class MenuService {
    menuItems: Array<MenuItem>;

    constructor() {
        this.menuItems = [];
    }

    getMenu() {
        return this.menuItems;
    }

    addMenu(items: Array<MenuItem>) {
        items.forEach((item) => {
            this.menuItems.push(item);
        });
    }
}
