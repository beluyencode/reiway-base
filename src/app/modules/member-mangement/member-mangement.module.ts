import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { MemberMangementComponent } from './member-mangement.component';

const routes: Routes = [
    {
        path: '',
        component: MemberMangementComponent,
    },
];

@NgModule({
  declarations: [MemberMangementComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class MemberMangementModule { }
