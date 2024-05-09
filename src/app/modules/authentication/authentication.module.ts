import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationComponent } from './authentication.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'confirm-email', component: ConfirmEmailComponent },
            { path: 'forgot-password', component: ForgotPasswordComponent },
            { path: 'reset-password', component: ResetPasswordComponent },
        ],
    },
];

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent,
        ConfirmEmailComponent,
        ForgotPasswordComponent,
        AuthenticationComponent,
    ],
    imports: [SharedModule, RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationModule {}
