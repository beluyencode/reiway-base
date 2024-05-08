import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
    providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url = '';
        if (!req.url.startsWith('/assets')) {
            url = environment.api + req.url;
        } else {
            url = req.url;
        }
        req = req.clone({
            url: url,
        });

        return next.handle(req).pipe(
            tap(
                (event: any) => {
                    if (typeof event !== 'undefined' && typeof event.body !== 'undefined') {
                        let body = event.body;

                        if (typeof body.message !== 'undefined' && body.message !== 'SUCCESS' && !req.url.startsWith('/assets')) {
                            console.log('Lỗi');
                        }
                    }
                },
                (err: any) => {
                    /**
                     * Check Error
                     */
                    if (err instanceof HttpErrorResponse) {
                        console.log(err);
                        if (err.status === 401) {
                            console.log('Lỗi đăng nhập');
                        }
                    }
                }
            )
        );
    }
}
