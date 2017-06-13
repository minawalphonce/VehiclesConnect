import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CustomerDto } from '../../../api-proxy';

@Component({
  selector: 'vc-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent {

  @Output() filter = new EventEmitter<any>();
  @Input() customers: CustomerDto[];

  filterForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.filterForm = formBuilder.group({
      'customerId': '',
      'showConnectedOnly': ''
    });
  }

  onFilterClicked() {
    this.filter.emit(this.filterForm.value);
  }
}
