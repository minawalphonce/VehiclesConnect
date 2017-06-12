import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { VehicleDto, CustomerDto, VehiclesService, CustomesService } from '../../../api-proxy';

@Component({
  selector: 'vc-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, OnDestroy {
  vehicles$: Observable<VehicleDto[]>;
  customers$: Observable<CustomerDto[]>;
  intervalId;

  constructor(
    private vehiclesService: VehiclesService,
    private customesService: CustomesService) {

    this.vehicles$ = this.vehiclesService.findVehicles({});
    this.customers$ = this.customesService.GetCustomers();

    this.intervalId = setInterval(() => {
      this.vehicles$ = this.vehiclesService.findVehicles({});
    }, 1000 * 30);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  ngOnInit() {
  }

}
