import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    hidePassword = true;
    valForm: FormGroup;

    constructor(fb: FormBuilder, private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
        this.valForm = fb.group({
            phone: ['0818813399', [Validators.required]],
            password: ['123456', Validators.required],
        });
    }

    submitForm($e: Event, value: any) {
        $e.preventDefault();

        for (let c in this.valForm.controls) {
            this.valForm.controls[c].markAllAsTouched();
        }

        if (this.valForm.valid) {
            this.authService.login(value).subscribe((res) => {
                if (res.status === 'success') {
                    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
                    this.router.navigateByUrl(returnUrl);
                }
            });
        }
    }
}
