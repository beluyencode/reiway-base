import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AgencyMangementComponent } from './agency-mangement.component';
import { TreeManageTypeComponent } from './tree-manage-type/tree-manage-type.component';
import { ListManageTypeComponent } from './list-manage-type/list-manage-type.component';

const routes: Routes = [
  {
    path: '',
    component: AgencyMangementComponent,
  },
];

@NgModule({
  declarations: [
    TreeManageTypeComponent,
    ListManageTypeComponent,
    AgencyMangementComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class AgencyMangementModule { }
