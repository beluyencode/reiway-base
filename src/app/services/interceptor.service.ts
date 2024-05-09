import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
    constructor(private router: Router, private storage: StorageService, private state: RouterStateSnapshot) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = this.storage.get('appToken');

        let url = '';
        if (!req.url.startsWith('/assets')) {
            url = environment.api + req.url;
        } else {
            url = req.url;
        }
        req = req.clone({
            url: url,
        });

        if (token) {
            req = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`),
            });
        } else {
            if (!req.url.startsWith('/auth')) {
                const route = this.router.createUrlTree(['/auth/login'], { queryParams: { returnUrl: this.state.url } });
                this.router.navigateByUrl(route);
            }
        }

        return next.handle(req).pipe(
            tap(
                (event: any) => {
                    if (typeof event !== 'undefined' && typeof event.body !== 'undefined') {
                        let body = event.body;

                        if (!req.url.startsWith('/assets') && typeof body.status !== 'undefined' && body.status !== 'success') {
                            console.log('Lỗi');
                        }
                    }
                },
                (err: any) => {
                    /**
                     * Check Error
                     */
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            this.storage.remove('appToken');
                            this.router.navigate(['/auth/login']);
                        }
                    }
                }
            )
        );
    }
}
