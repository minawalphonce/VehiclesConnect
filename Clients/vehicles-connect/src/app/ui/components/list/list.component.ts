import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { VehicleDto } from '../../../api-proxy';

@Component({
  selector: 'vc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  private _vehicles: VehicleDto[];

  @Input()
  set vehicles(vehicles: VehicleDto[]) {
    if (!vehicles)
      return;
    if (!this._vehicles)
      this._vehicles = vehicles;
    else {
      for (var ndx in this._vehicles) {
        let foundNdx = vehicles.findIndex(v => v.id == this._vehicles[ndx].id);
        if (foundNdx == -1)
          this._vehicles.splice(foundNdx, 1);
      }

      for (var ndx in vehicles) {
        let vehicle = vehicles[ndx];
        if (this._vehicles.findIndex(v => v.id == vehicle.id) == -1) {
          this._vehicles.push(vehicle);
        }
        else
          this._vehicles.find(v => v.id == vehicle.id).isConnected = vehicle.isConnected;
      }
    }
  }
  get vehicles(): VehicleDto[] {
    return this._vehicles;
  }

  track(vehicle: VehicleDto) {
    return vehicle.id;
  }

  constructor() { }

  ngOnInit() {
  }

}
