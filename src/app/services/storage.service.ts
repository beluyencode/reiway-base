import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    private _storage: Storage;

    constructor() {
        this._storage = environment.storage === 'session' ? window.sessionStorage : window.localStorage;
    }

    /**
     * Get Value
     * @param key
     * @returns
     */
    get(key: string): string | null {
        return this._storage.getItem(key);
    }

    /**
     * Set Value
     * @param key
     * @param value
     */
    set(key: string, value: string): void {
        this._storage.setItem(key, value);
    }

    /**
     * Remove Value
     * @param key
     */
    remove(key: string): void {
        this._storage.removeItem(key);
    }
}
