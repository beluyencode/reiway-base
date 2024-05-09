import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts/layouts.component';
import { MenuService } from './services/menu.service';
import { menu } from './menu';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: LayoutsComponent,
        canActivate: [authGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule) },
            { path: 'member', loadChildren: () => import('./modules/member-mangement/member-mangement.module').then((m) => m.MemberMangementModule) },
            { path: 'agency', loadChildren: () => import('./modules/agency-mangement/agency-mangement.module').then((m) => m.AgencyMangementModule) },
        ],
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/authentication/authentication.module').then((m) => m.AuthenticationModule),
    },
    { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            scrollPositionRestoration: 'enabled',
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {
    constructor(menuService: MenuService) {
        menuService.addMenu(menu);
    }
}
