import { Injectable } from '@angular/core';

type StorageType = {
    get(key: string): string | null;
    set(key: string, value: string): void;
    remove(key: string): void;
};

type StorageProxyType = {
    Storage: StorageType | null;
};

@Injectable({
    providedIn: 'root',
})

class StorageImp {
    _storage: Storage;

    constructor(storage: Storage) {
        this._storage = storage;
    }

    get(key: string) {
        return this._storage.getItem(key);
    }

    set(key: string, value: string) {
        this._storage.setItem(key, value);
    }

    remove(key: string) {
        this._storage.removeItem(key);
    }
}

export class StorageService {
    StorageProxy: StorageProxyType = {
        Storage: null,
    };

    applyStorage(storage: StorageType) {
        this.StorageProxy.Storage = storage;
    }

    /**
     * Get Local Storage
     */
    getLocalStorage = () => new StorageImp(window.localStorage);

    /**
     * Get Session Storage
     */
    getSessionStorage = () => new StorageImp(window.sessionStorage);
}
