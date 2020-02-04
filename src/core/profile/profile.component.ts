import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  optionsSelect: any
  constructor() {
    this.optionsSelect = [
      { value: '1', label: 'Administrator' },
      { value: '2', label: 'Accountant' },
      { value: 'Feature request', label: 'Product Administrator' },
      { value: 'Other stuff', label: 'Maintenance' },
    ];
   }

  ngOnInit() {
  }

}
