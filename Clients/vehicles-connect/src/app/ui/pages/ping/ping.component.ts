import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { VehiclesService, VehicleDto } from '../../../api-proxy';

@Component({
  selector: 'vc-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.less']
})
export class PingComponent implements OnDestroy {

  vericles$: Observable<VehicleDto[]>;
  pingTimers: { [id: number]: Subscription };
  logs: string[];

  constructor(private vehiclesService: VehiclesService) {
    this.vericles$ = vehiclesService.findVehicles({});
    this.logs = [];
    this.pingTimers = {};
  }

  pingOnce(item: VehicleDto) {
    this.ping(item);
  }

  startPinging(item: VehicleDto) {
    this.pingTimers[item.id] = Observable.timer(0, 1000 * 60).subscribe(() => this.ping(item));
  }

  stopPinging(item: VehicleDto) {
    if (this.pingTimers[item.id]) {
      this.pingTimers[item.id].unsubscribe();
      delete this.pingTimers[item.id];
    }
  }

  private ping(item: VehicleDto) {
    this.vehiclesService.pingVehicle(item.id).subscribe();
    this.logs.push(`ping vehicle : ${item.id} - ${item.vin}`);
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:forin
    for (const subs in this.pingTimers) {
      this.pingTimers[subs].unsubscribe();
    }
  }

}
