import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    profile: BehaviorSubject<any>;
    general: BehaviorSubject<any[]>;

    constructor(private storage: StorageService, private http: HttpClient) {
        this.profile = new BehaviorSubject<any>({});
    }

    /**
     * Check Auth
     * @returns
     */
    isAuth(): boolean {
        let token = this.storage.get('appToken');

        if (!token) {
            return false;
        }

        return true;
    }

    /**
     * Login
     * @param credentials
     * @returns
     */
    login(credentials: any) {
        return this.http.post('/auth/login', credentials).pipe(
            map((res: any) => {
                if (res.status === 'success') {
                    this.storage.set('appToken', res.data.access_token);
                    this.profile.next(res.data.user);
                }
                return res;
            })
        );
    }
}
