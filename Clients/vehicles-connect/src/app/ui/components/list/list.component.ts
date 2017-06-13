import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { VehicleDto } from '../../../api-proxy';

@Component({
  selector: 'vc-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() vehicles: VehicleDto[];

  track(vehicle: VehicleDto) {
    return vehicle.id;
  }

  constructor() { }
}
