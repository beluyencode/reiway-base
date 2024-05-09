import { Component } from '@angular/core';

@Component({
  selector: 'app-agency-mangement',
  templateUrl: './agency-mangement.component.html',
  styleUrl: './agency-mangement.component.scss',
})
export class AgencyMangementComponent {
  isTreeView: Boolean = true

  switchViewType() {
    this.isTreeView = !this.isTreeView;
  }
}
