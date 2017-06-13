import { Component } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { VehicleDto, CustomerDto, VehiclesService, CustomesService } from '../../../api-proxy';

@Component({
  selector: 'vc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent {
  vehicles$: Observable<VehicleDto[]>;
  customers$: Observable<CustomerDto[]>;
  filter$: BehaviorSubject<any>;

  constructor(
    private vehiclesService: VehiclesService,
    private customesService: CustomesService) {

    this.customers$ = this.customesService.GetCustomers();
    this.filter$ = new BehaviorSubject({
      showConnectedOnly: null,
      coustomerId: null,
    });

    this.vehicles$ = Observable.timer(0, 1000 * 5)
      .combineLatest(this.filter$)
      .switchMap(([, filter]) => {
        return this.vehiclesService.findVehicles(filter);
      });
  }

  onFilter(filter) {
    this.filter$.next(filter);
  }
}
