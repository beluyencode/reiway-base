import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';
import { SettingsComponent } from './layouts/settings/settings.component';
import { InterceptorService } from './services/interceptor.service';
import { AppRoutingModule } from './app.routes';

/**
 * Ngx Translate
 */
export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
    declarations: [AppComponent, LayoutsComponent, HeaderComponent, FooterComponent, SidebarComponent, SettingsComponent],
    imports: [
        BrowserAnimationsModule,
        SharedModule.forRoot(),
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient],
            },
            defaultLanguage: 'vi',
        }),
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
