import { Component } from '@angular/core';

@Component({
  selector: 'vc-account-dropdown',
  templateUrl: './account-dropdown.component.html',
  styleUrls: ['./account-dropdown.component.less']
})
export class AccountDropdownComponent {

  open: boolean;
  constructor() { }

  onLogoutClicked() {
    alert('Sorry!! it is just a dummy link');
  }

}
