import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { CustomerDto } from '../../../api-proxy';

@Component({
  selector: 'vc-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.less']
})
export class FiltersComponent implements OnInit {

  @Input() customers: CustomerDto[];

  constructor() { }

  ngOnInit() {
  }

}
